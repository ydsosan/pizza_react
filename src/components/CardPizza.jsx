import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const MyCard = ({name, price, ingredients, img}) => {
return (
<>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='text-card'>Ingredientes: 🍕{ingredients.join(', ')}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: ${price.toLocaleString()}</ListGroup.Item>
      </ListGroup>
      <Card.Body className='footer-card'>
      <Button variant="light">Ver más👀</Button>
      <Button variant="dark">Añadir🛒</Button>
      </Card.Body>
    </Card>

</>
);
};
export default MyCard;