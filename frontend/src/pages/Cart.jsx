import React from "react";
import { useCart } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import { useUserContext } from "../context/UserContext.jsx";

const Cart = () => {
  const { token } = useUserContext();
  const { cart, updateCartQuantity, calculateTotal, removeFromCart } = useCart(); 

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar el pago.");
      return;
    }

    const checkoutData = {
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: calculateTotal(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(checkoutData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Compra realizada con éxito!");
      } else {
        alert(data.message || "Error al procesar el pago.");
      }
    } catch (error) {
      console.error("Error al enviar el checkout:", error);
      alert("Ocurrió un error al realizar la compra.");
    }
  };

  return (
    <div className="container2 mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <Card key={pizza.id} className="mb-3">
            <Card.Body className="d-flex align-items-center card-bodycart">
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "15px",
                }}
              />
              <div style={{ flex: "1" }}>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>Precio: ${pizza.price.toLocaleString()}</Card.Text>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-dark"
                    onClick={() => updateCartQuantity(pizza.id, "decrease")}
                    className="me-2"
                  >
                    -
                  </Button>
                  {pizza.quantity}
                  <Button
                    variant="outline-dark"
                    onClick={() => updateCartQuantity(pizza.id, "increase")}
                    className="ms-2"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  Eliminar
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
      <div className="mt-4">
        <h3>Total de la compra: ${calculateTotal().toLocaleString()}</h3>
        <Button 
          disabled={!token || cart.length === 0} 
          variant="success" 
          onClick={handleCheckout}
        >
          Pagar
        </Button>
      </div>
    </div>
  );
};

export default Cart;
