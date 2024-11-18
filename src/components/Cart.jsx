// Cart.jsx
import React, { useState } from 'react';
import { pizzaCart as initialCart } from './pizzas'; 

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, action) => {
    setCart(cart.map(pizza => {
      if (pizza.id === id) {
        const newQuantity = action === 'increase' ? pizza.quantity + 1 : pizza.quantity - 1;
        return newQuantity > 0 ? { ...pizza, quantity: newQuantity } : null;
      }
      return pizza;
    }).filter(Boolean)); // Eliminamos las pizzas con cantidad 0
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map(pizza => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
            <div>{pizza.name}</div>
            <div>${pizza.price.toLocaleString()}</div>
            <div>
              <button onClick={() => updateQuantity(pizza.id, 'decrease')}>-</button>
              {pizza.quantity}
              <button onClick={() => updateQuantity(pizza.id, 'increase')}>+</button>
            </div>
            <div>Total: ${pizza.price * pizza.quantity}</div>
          </div>
        ))
      )}
      <div>
        <h3>Total de la compra: ${calculateTotal().toLocaleString()}</h3>
        <button>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
