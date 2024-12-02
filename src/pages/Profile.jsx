import React from 'react';
import Button from 'react-bootstrap/Button';

const Profile = () => {
  const email = "usuario@ejemplo.com"; // Email estático por ahora

  const handleLogout = () => {
    console.log("Cerrar sesión"); // Lógica de cierre de sesión se implementará más adelante
    alert("Sesión cerrada (pendiente de implementación).");
  };

  return (
    <div className="container user text-center mt-5">
      <h2>Perfil del Usuario</h2>
      <p>Email: <strong>{email}</strong></p>
      <Button variant="danger" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default Profile;
