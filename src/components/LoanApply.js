import React, { useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserDetailsContext } from "../context/LoanApplyContext";

function LoanApply() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [AadharId, setAadharId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [error, setError] = useState("");
  const { addDetails } = useUserDetailsContext();
  const handleSubmit = async (e) => {
    console.log(firstName);
    e.preventDefault();
    await addDetails(firstName, lastName, AadharId, mobileNumber, Address);
    setError("");
    navigate("/GoldDetails");
    try {
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Apply for a New Gold Loan</h1>
      <Container className="ml-8 my-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 justify-content-md-center">
            <Form.Group as={Col} md="4" className="position-relative">
              <Form.Label className="font-weight-bold">First name</Form.Label>
              <Form.Control
                type="text"
                required={true}
                name="firstName"
                onChange={(e) => {
                  setfirstName(e.target.value);
                  console.log(firstName);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" className="position-relative">
              <Form.Label className="font-weight-bold">Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                required={true}
                onChange={(e) => setlastName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 justify-content-md-center">
            <Form.Group as={Col} md="8" className="position-relative">
              <Form.Label className="font-weight-bold">
                Mobile Number:
              </Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                required={true}
                placeholder="mobile number"
                name="mobileNumber"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">

            <Form.Group as={Col} md="8" className="mb-2 mt-3  ">
              <Form.Label className="font-weight-bold">Aadhar ID</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{12}"
                required={true}
                name="AadharId"
                placeholder="aadharId"
                onChange={(e) => setAadharId(e.target.value)}
              />
            </Form.Group>

          </Row>
          <Row className="justify-content-md-center">
            <Form.Group as={Col} md="8" className="mb-3 ">
              <Form.Label className="font-weight-bold">Address</Form.Label>
              <Form.Control
                as="textarea"
                required={true}
                name="Address"
                placeholder=""
                rows={2}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="4">
              <Button
                variant="outline-secondary"
                type="Submit"
                className="text-center px-5 mt-4 mb-4 "
              >
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

//nrender(<LoanApply />);
export default LoanApply;
