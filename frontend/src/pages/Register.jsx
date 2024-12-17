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
            setSuccessMessage(''); // Limpiar el mensaje de éxito si hay error
            event.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            setSuccessMessage(''); // Limpiar el mensaje de éxito si hay error
            event.preventDefault();
            return;
        }

        // Si todo está correcto, mostrar mensaje de éxito y limpiar errores
        setValidated(true);
        setErrorMessage('');
        setSuccessMessage('¡Formulario enviado correctamente!'); // Mensaje de éxito

       
    };

    return ( 
        <div className='Form'>
            <h2>Registro</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* Campo de Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Form.Control.Feedback>Está correcto</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Por favor escriba su correo electrónico.</Form.Control.Feedback>
                </Form.Group>

                {/* Campo de Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Form.Control.Feedback>Está correcto</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Por favor escriba su password.</Form.Control.Feedback>
                </Form.Group>

                {/* Campo de Confirmar Password */}
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirme Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <Form.Control.Feedback>Está correcto</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Por favor confirme su password.</Form.Control.Feedback>
                </Form.Group>

                {/* Mostrar mensaje de error si existe */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                {/* Mostrar mensaje de éxito si el formulario es válido */}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                <Button type="submit">Registrar</Button>
            </Form>
        </div>
    );
};

export default Register;