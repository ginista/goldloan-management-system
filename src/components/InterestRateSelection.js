import React, { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { useUserDetailsContext } from "../context/LoanApplyContext";
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Alert
} from "react-bootstrap";
function interestRateSelection() {
  const [date, setDate] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [rateSelection, setrateSelection] = useState("");
  const { interestRate } = useUserDetailsContext();
  const [Loanno, setLoanNo] = useState("");
  const [ratepercent, setratepercent] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const isValid = (fieldValue) => {
    return fieldValue != undefined && fieldValue != null && fieldValue.trim().length > 0;
  };

  const handleSelect = (e) => {
    console.log(e);
    setLoanNo(uuid());
    setrateSelection(e);
    setratepercent(e + "%");
  };

  const goToGiveDisplay = async () => {
    if (isValid(date) && isValid(dueDate) && isValid(rateSelection) && isValid(Loanno)) {
      await interestRate(date, dueDate, rateSelection, Loanno);
      navigate("/GiveDisplay");
    } else {
      console.log("Please check the data");
      seterror("Invalid Data...");
    }
  }

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Interest Rate Selection</h1>
      <h2> {error && <Alert variant="danger">{error}</Alert>}</h2>
      <Container>
        <Form onSubmit={goToGiveDisplay}>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  name="date"
                  required
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <Form.Label>Due date:</Form.Label>
                <Form.Control
                  type="date"
                  required
                  placeholder=""
                  name="dueDate"
                  onChange={(e) => {
                    setdueDate(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <DropdownButton
                  className=" position-relative mb-2"
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Interest Rate"
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey="8">8%</Dropdown.Item>
                  <Dropdown.Item eventKey="12">12%</Dropdown.Item>
                  <Dropdown.Item eventKey="15">15%</Dropdown.Item>
                  <Dropdown.Item eventKey="21">21%</Dropdown.Item>
                </DropdownButton>
                {ratepercent}
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
                View
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
export default interestRateSelection;
