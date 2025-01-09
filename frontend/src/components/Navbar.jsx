

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";
import { useCart } from "../context/CartContext";


const NavigationBar = () => {
  const { token, logout } = useUserContext();
  const { calculateTotal } = useCart();
  const total = calculateTotal();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzeria Mamma Mia🍕
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>     
            {/* Mostrar botones según el estado del token */}
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">
                🔓 Profile
                </Nav.Link>
                <Nav.Link onClick={logout}>🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                  <Nav.Link as={Link} to="/login">
                    🔐 Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    🔐 Register
                  </Nav.Link>
              </>
            )}
            <div className="total"><Nav.Link as={Link} to="/cart">
              🛒 Total Carrito: ${total.toLocaleString()}
            </Nav.Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
