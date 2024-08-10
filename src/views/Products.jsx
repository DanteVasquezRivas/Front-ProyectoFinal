import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, 
    name: "Cama para perro", 
    description: "Cama acolchonada, 100% algodón", 
    price: 12000, 
  },
  {
    id: 2,
    name: "Capa Dogs",
    description: "Juguete para gato",
    price: 8000,
  },
  { id: 3, 
    name: "Juguete", 
    description: "Juguete para perro", 
    price: 3500 
  },
  {
    id: 4,
    name: "Pañoleta",
    description: "Juguete para gato",
    price: 10000,
  },
  { id: 5, 
    name: "Peinetas", 
    description: "Juguete para perro", 
    price: 5000, 
  },
  { id: 6, 
    name: "Casa", 
    description: "Juguete para perro", 
    price: 20000 
  },
];

const Products = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
