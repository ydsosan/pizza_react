import React from "react";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Para redirigir después de logout

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => {
          console.error("Error al obtener el perfil del usuario:", error);
          setUser(null);
        });
    }
  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");


    setUser(null);

    alert("Sesión cerrada");
    navigate("/");
  };

  return (
    <div className="container user text-center mt-5">
      <h2>Perfil del Usuario</h2>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <Button variant="danger" onClick={handleLogout}>
            Cerrar sesión
          </Button>
          <Link to='/'>Volver al inicio</Link>
        </>
      ) : (
        <p>Por favor inicia sesión para ver tu perfil.</p>
      )}
    </div>
  );
};

export default Profile;
