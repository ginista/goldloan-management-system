import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col, Container, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("In handle submit");
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-4 mb-4" style={{

      }}>
        Welcome to Gold Loan Management..
      </h1>
      <h2> {error && <Alert variant="danger">{error}</Alert>}</h2>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <Form.Label><b>E-mail:</b></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email id"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 ">
                <Form.Label><b>Password:</b></Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="Please enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="3">
              <Link to="/SignUp"><Button
                variant="outline-secondary"
                className="text-center px-5 mt-4 mb-4"
              >
                Sign up
              </Button></Link></Col>
            <Col md="2">
              <Button
                variant="outline-secondary"
                type="Submit"
                className="text-center px-5 mt-4 mb-4"
              >
                Login
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="1"> </Col>
            <Col md="4">
              <div>
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
export default Login;
