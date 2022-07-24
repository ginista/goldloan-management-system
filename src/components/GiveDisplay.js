import React, { useEffect, useState } from "react";
import { Row, Col, Container, ListGroup, Alert, Button } from "react-bootstrap";

import { useUserDetailsContext } from "../context/LoanApplyContext";
import DAO from "./DAO";
function display() {
  let {
    firstName,
    lastName,
    AadharId,
    mobileNumber,
    Address,
    goldType,
    grams,
    loanAmount,
    date,
    dueDate,
    rateSelection,
    Loanno,
  } = useUserDetailsContext();

  useEffect(() => {
    //  getBooks();
  }, []);
  const getBookIdHandler = (id) => {
    //   setBookId(id);
    console.log(id);
  };

  const [Indicate, setIndicate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUsers = {
      firstName,
      lastName,
      AadharId,
      mobileNumber,
      Address,
      goldType,
      grams,
      loanAmount,
      date,
      dueDate,
      rateSelection,
      Loanno,
    };

    await DAO.addusers(newUsers);
    setIndicate("true");

  };

  return (
    <>
      <h2>
        {" "}
        {Indicate && <Alert variant="info">Data added Successfully!!</Alert>}
      </h2>
      <h1 className="text-center mt-2 mb-2">Details</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="7">
            <ListGroup as="ul" className="mb-1 mt-2 ">
              <ListGroup.Item as="li">
                <b>Name</b> :{firstName}{" "}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-1 mt-2 ">
              <ListGroup.Item as="li">
                <b>Loan No.</b> :{Loanno}{" "}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Amount : </b>
                {loanAmount}
              </ListGroup.Item>
            </ListGroup>{" "}
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Gold Weight :</b> {grams}
              </ListGroup.Item>
            </ListGroup>{" "}
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Gold Type :</b> {goldType}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Date :</b> {date}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Due Date:</b> {dueDate}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Interest Rate:</b> {rateSelection}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <Button variant="primary" type="Submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default display;
