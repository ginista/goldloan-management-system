import React from "react";
import {
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap";
import { useUserDetailsContext } from "../context/LoanApplyContext";
//import interestRateSelection from "./InterestRateSelection";

function display() {
  let {
    firstNamedb, searchData
  } = useUserDetailsContext();

  /* const handleSubmit = async (e) => {
 
     //e.preventDefault();
 
     //await adddbDetails(firstNamedb, loanNodb,amountdb, goldweightdb,goldtypedb,datedb,dueDatedb,interestratedb,interestamountdb,totalamountdb);
     // setError("");
     try {
       //console.log(await DAO.getCustomerDataUsingLoadId("78011a-abc8-00c2-df5-2b1bd68d0d"));
 
       // setfirstNamedb(info.data.firstName);
     } catch (err) {
       //  setError(err.message);
     }
   };*/
  /*const deleteHandler = async (id) => {
    await DAO.delete(id);
  };*/
  return (
    <>
      <h1 className="text-center mt-2 mb-2">Loan Details</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="7">
            <ListGroup as="ul" className="mb-1 mt-2 ">
              <ListGroup.Item as="li">
                <b>Name :</b> {searchData.firstName}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Loan No. :</b> {searchData.Loanno}
              </ListGroup.Item>
            </ListGroup>{" "}
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Amount :</b> {searchData.loanAmount}
              </ListGroup.Item>
            </ListGroup>{" "}
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Gold Weight :</b> {searchData.grams}
              </ListGroup.Item>
            </ListGroup>{" "}
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Gold Type :</b> {searchData.goldType}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Date : </b> {searchData.date}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Due Date:</b> {searchData.dueDate}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Interest Rate:</b>{searchData.rateSelection}%
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Monthy Due:</b> {(searchData.loanAmount * (1 + ((searchData.rateSelection) / 100))) / 12}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ul" className="mb-2 mt-3 ">
              <ListGroup.Item as="li">
                <b>Total Amount:</b> {(searchData.loanAmount * (1 + ((searchData.rateSelection) / 100)))}
              </ListGroup.Item>
            </ListGroup>

          </Col>
        </Row>
      </Container>
    </>
  );
}
export default display;
