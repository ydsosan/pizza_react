import React from 'react';

const MyNavbar = () => {
    const total = 25000;
    const token = false; 

    return (
        <nav className="navbar">
            <div className="logo">Pizzeria Mamma Mia</div>
            <div className="links">
                <span className="link">🍕 Home</span>
                {token ? (
                    <>
                        <span className="link">🔓 Profile</span>
                        <span className="link">🔒 Logout</span>
                    </>
                ) : (
                    <>
                        <span className="link">🔐 Login</span>
                        <span className="link">🔐 Register</span>
                    </>
                )}
            </div>
            <div className="total">🛒 Total: ${total.toLocaleString()}</div>
        </nav>
    );
};

export default MyNavbar;