import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="text-muted mb-4">
        Parece que has llegado a una ruta que no existe. Pero no te preocupes, ¡puedes volver al inicio!
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
