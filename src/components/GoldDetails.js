import React from "react";

import { useState } from "react";

import { useUserDetailsContext } from "../context/LoanApplyContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Alert
} from "react-bootstrap";
function GoldDetails() {
  const [goldType, setgoldType] = useState("");
  const [image, setImage] = useState("");
  const [grams, setGrams] = useState("");
  const [loanAmount, setloanAmount] = useState("");
  const [error, seterror] = useState("");

  const { goldDetails } = useUserDetailsContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (isValid(goldType) && isValid(grams) && isValid(loanAmount)) {
      await goldDetails(goldType, grams, loanAmount);
      navigate("/InterestRateSelection");
    } else {
      console.log("Please check the data");
      seterror("Invalid Data...");
    }
  };
  const isValid = (fieldValue) => {
    return fieldValue != undefined && fieldValue != null && fieldValue.trim().length > 0;
  };

  const handleSelect = (e) => {
    console.log(e);
    seterror("");
    setgoldType(e);
  };
  return (
    <>
      <h1 className="text-center mt-4 mb-4 font-italic">Gold Details</h1>
      <h2> {error && <Alert variant="danger">{error}</Alert>}</h2>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row className="justify-content-md-center ">
            <Col md="5" className="px-5">
              <DropdownButton
                className=" position-relative mb-2"
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                required={true}
                title="Gold type"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="chain">Chain</Dropdown.Item>
                <Dropdown.Item eventKey="ring">Ring</Dropdown.Item>
                <Dropdown.Item eventKey="bangle">Bangle</Dropdown.Item>
                <Dropdown.Item eventKey="bracelet">Bracelet</Dropdown.Item>
              </DropdownButton>
              {goldType}
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <Form.Label>Grams</Form.Label>
                <Form.Control
                  type="number"
                  name="grams"
                  placeholder="gram"
                  onChange={(e) => {
                    setGrams(e.target.value);
                    seterror("");
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="position-relative mb-2 my-2">
                <Form.Label>Loan Amount</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>₹</InputGroup.Text>
                  <FormControl
                    type="number"
                    name="grams"
                    placeholder="loanAmount"
                    onChange={(e) => {
                      setloanAmount(e.target.value);
                      seterror("");
                    }}
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="3"> </Col>
            <Col md="2">
              <Button
                type="Submit"
                variant="outline-secondary"
                className="text-center  mt-4 mb-4 px-5"
              >
                Apply
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
export default GoldDetails;
