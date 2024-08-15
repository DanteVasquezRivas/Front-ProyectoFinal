// src/pages/Register.js
import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/");
    } catch (error) {
      setError("Registro inválido");
    }
  };

  return (
    <Container className="ContainerRegister">
      <Row className="justify-content-md-center">
        <Col className="registro">
          <h1 className="text-center">CREAR CUENTA</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <div className="formRegister">
              {" "}
              <div>
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </Form.Group>
                <br/>
                <Form.Group controlId="formLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Ingresa tu apellido"
                    required
                  />
                </Form.Group>     
                <br/>        
              </div>
              <div>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ingresa tu email"
                    required
                  />
                </Form.Group>
                <br/>
                <Form.Group controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                </Form.Group>
                <br/>
              </div>
            </div>
            <Button variant="danger" type="submit" className="mt-3">
              Crear Cuenta
            </Button>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
