import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import DAO from "./DAO";
import { useNavigate } from "react-router-dom";

import { useUserDetailsContext } from "../context/LoanApplyContext";
function take() {
  const [loanCheck, setloanCheck] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const { adddbDetails } = useUserDetailsContext();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();
    if (isValid(mobileNo)) {
      const datadb = await DAO.getCustomerDataUsingMobileNo(mobileNo, adddbDetails);
      console.log("datadb" + datadb);
      navigate("/TakeDisplay");
    } else if (isValid(loanCheck)) {
      const datadb = await DAO.getCustomerDataUsingLoadId(loanCheck, adddbDetails);
      console.log("datadb" + datadb);

      navigate("/TakeDisplay");

    }
  };

  const isValid = (fieldValue) => {
    return fieldValue != undefined && fieldValue != null && fieldValue.trim().length > 0;
  };


  return (
    <>
      <Form>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 mt-3 ">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 ">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter your mobile number" name="mobileNo"
                  onChange={(e) => {
                    console.log(setmobileNo(e.target.value));
                  }} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Form.Group className="mb-2 ">
                <Form.Label>Loan Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your loan number"
                  name="loanCheck"
                  onChange={(e) => {
                    console.log(setloanCheck(e.target.value));
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="3"> </Col>
            <Col md="2">  <Button
              variant="outline-secondary"
              type="Submit"
              className="text-center px-5 mt-4 mb-4"
              onClick={handleSubmit}
            >
              Search
            </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default take;
