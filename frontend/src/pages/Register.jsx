import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";

const Register = () => {
    const { token } = useUserContext();

    if (token) return <Navigate to="/" />;
    
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Validaciones adicionales para la contraseña
        if (password.length < 6) {
            setErrorMessage('La contraseña debe tener al menos 6 caracteres');
            setSuccessMessage(''); 
            event.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            setSuccessMessage(''); 
            event.preventDefault();
            return;
        }

        
        setValidated(true);
        setErrorMessage('');
        setSuccessMessage('¡Formulario enviado correctamente!'); 

       
    };

    return ( 
        <div className='Form'>
            <div className='box-form'>
            <h2>Registro</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirme Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirme Contraseña"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <Form.Control.Feedback>Está correcto</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Por favor confirme su password.</Form.Control.Feedback>
                </Form.Group>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                <Button type="submit">Sign Up</Button>
            </Form>
            </div>

        </div>
    );
};

export default Register;