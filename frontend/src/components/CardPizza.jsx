import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} alt={`Imagen de ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-card">
          <strong>🍕 Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>
            <strong>Precio:</strong> ${price}
          </p>
        </Card.Text>
        <div className="Botoncardpizza">        {/*redirigir a los detalles */}
          <Link to={`/pizza/${id}`} style={{ textDecoration: "none" }}>
            <Button variant="primary" style={{ marginRight: "10px" }}>
              Ver Detalles
            </Button>
          </Link>

          {/* Botón de agregar al carrito */}
          <Button onClick={() => addToCart({ id, name, price, img, quantity: 1 })} variant="success" >
            <FaShoppingCart /> Agregar al carrito
          </Button></div>

      </Card.Body>
    </Card>
  );
};

export default CardPizza;
