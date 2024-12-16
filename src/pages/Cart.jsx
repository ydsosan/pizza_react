//import React, { useState } from 'react';
//import { pizzaCart as initialCart } from '../components/pizzas'; 
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
//import Button from 'react-bootstrap/Button';
//
//
//const Cart = () => {
//  const [cart, setCart] = useState(initialCart);
//  const updateQuantity = (id, action) => {
//    setCart(cart.map(pizza => {
//      if (pizza.id === id) {
//        const newQuantity = action === 'increase' ? pizza.quantity + 1 : pizza.quantity - 1;
//        return newQuantity > 0 ? { ...pizza, quantity: newQuantity } : null;
//      }
//      return pizza;
//    }).filter(Boolean)); 
//  };
//  const calculateTotal = () => {
//    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
//  };
//  return (
//    <div>
//      <h2>Carrito de Compras</h2>
//      {cart.length === 0 ? (
//        <p>El carrito está vacío.</p>
//      ) : (
//        cart.map(pizza => (
//          <div key={pizza.id} className="cart-item">
//            <img src={pizza.img} alt={pizza.name} style={{ width: '100px' }} />
//            <div>{pizza.name}</div>
//            <div>${pizza.price.toLocaleString()}</div>
//            <div>
//              <Button onClick={() => updateQuantity(pizza.id, 'decrease')}>-</Button>
//              {pizza.quantity}
//              <Button onClick={() => updateQuantity(pizza.id, 'increase')}>+</Button>
//            </div>
//            <div>Total: ${pizza.price * pizza.quantity}</div>
//          </div>
//        ))
//      )}
//      <div className='compra'>
//        <h3>Total de la compra: ${calculateTotal().toLocaleString()}</h3>
//        <Button>Pagar</Button>
//      </div>
//    </div>
//  );
//};
//export default Cart;


import React from "react";
import { useCart } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import { useUserContext } from "../context/UserContext.jsx";

const Cart = () => {
  const { token } = useUserContext();
  const { cart, updateCartQuantity, calculateTotal, removeFromCart } = useCart(); 
  console.log("Contenido del carrito:", cart);
  return (
    <div className="container2 mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <Card key={pizza.id} className="mb-3">
            <Card.Body className="d-flex align-items-center">
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
        <Button disabled={!token} variant="success">Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
