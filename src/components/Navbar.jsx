import React from 'react';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
    const total = 25000;
    const token = false; 

    return (
        <nav className="navbar">
            <div className="logo">Pizzeria Mamma Mia</div>
            <div className="links">
                <Nav.Link href="#home" className="link">🍕 Home</Nav.Link>
                {token ? (
                    <>
                        <Nav.Link href="" className="link">🔓 Profile</Nav.Link>
                        <Nav.Link href="" className="link">🔒 Logout</Nav.Link>
                    </>
                ) : (
                    <>
                        <Nav.Link href="/Login" className="link">🔐 Login</Nav.Link>
                        <Nav.Link href="/Register" className="link">🔐 Register</Nav.Link>
                    </>
                )}
            </div>
            <div className="total">🛒 Total: ${total.toLocaleString()}</div>
        </nav>
    );
};

export default MyNavbar;