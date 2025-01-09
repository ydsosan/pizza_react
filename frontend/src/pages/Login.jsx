import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";
import { Link } from 'react-router-dom'

const Login = () => {
    const { setToken } = useUserContext(); 
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            event.preventDefault();
            try {
                const response = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });

                const data = await response.json();

                if (data?.error) {
                    setErrorMessage(data.error);
                } else {
                    // Guarda el token y redirige
                    localStorage.setItem("token", data.token);
                    setToken(data.token); 
                    navigate("/profile"); // Redirige al perfil
                }
            } catch (error) {
                setErrorMessage("Ocurrió un error, por favor intenta nuevamente.");
            }
        }

        if (password.length < 6) {
            setErrorMessage('La contraseña debe tener al menos 6 caracteres');
            event.preventDefault();
            return;
        }
    };

    return (
        <div className='Form'>
            <div className='box-form'>
                <h1>Sign in</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* Email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Form.Control.Feedback>Está correcto</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Por favor escriba su correo electrónico.</Form.Control.Feedback>
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Form.Control.Feedback>Está correcto</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Por favor escriba su password.</Form.Control.Feedback>
                    </Form.Group>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <div className='boton-form'><Button className='button-form' type="submit">Sign in</Button></div>
                    <div className='pform'><p>¿No tienes cuenta?</p><Link to='/register'>Sign up</Link></div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
