import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const MyCard = ({ name, price, ingredients, img, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={img}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body className="flex-grow-1">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-card">
          Ingredientes:
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: ${price.toLocaleString()}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="footer-card mt-auto d-flex justify-content-between">
        <Link to={`./components/pizzas/${id}`}>
          <Button variant="light">Ver más👀</Button>
        </Link>
        <Button variant="dark">Añadir🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;

//import React from 'react';
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
//import Button from 'react-bootstrap/Button';
//
//const MyCard = ({ name, price, ingredients, img }) => {
//  return (
//    <Card style={{ width: '18rem' }}>
//      <Card.Img variant="top" src={img} />
//      <Card.Body>
//        <Card.Title>{name}</Card.Title>
//        <Card.Text className="text-card">
//          Ingredientes:
//          <ul>
//            {ingredients.map((ingredient, index) => (
//              <li key={index}>🍕 {ingredient}</li>
//            ))}
//          </ul>
//        </Card.Text>
//      </Card.Body>
//      <ListGroup className="list-group-flush">
//        <ListGroup.Item>Precio: ${price.toLocaleString()}</ListGroup.Item>
//      </ListGroup>
//      <Card.Body className="footer-card">
//        <Button variant="light">Ver más👀</Button>
//        <Button variant="dark">Añadir🛒</Button>
//      </Card.Body>
//    </Card>
//  );
//};
//export default MyCard;