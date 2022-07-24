import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("In handle submit");
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">
        Welcome to Gold Loan Management..
      </h1>
      <h2> {error && <Alert variant="danger">{error}</Alert>}</h2>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 ">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="Password"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Button
                variant="outline-secondary"
                type="Submit"
                className="text-center px-5 mt-4 mb-4"
              >
                Sign Up
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5"></Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
export default SignUp;
