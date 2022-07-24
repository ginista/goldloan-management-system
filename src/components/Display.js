import React from 'react';
import { UserDetailsContext } from '../context/LoanApplyContext';
import {Link} from "react-router-dom";
import {Form,Row,InputGroup,Button,Col ,Container} from 'react-bootstrap';

function display(){
    return(
        <>
        <Container>
         <Form >
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label className="font-weight-bold">Loan No.</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
             
               
              />
           
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label className="font-weight-bold">Aadhar Id</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                
             
             
              />

             
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label className="font-weight-bold">Name</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                
                 
                />
              
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label className="font-weight-bold">Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
               
               
              
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label className="font-weight-bold">Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"  
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label className="font-weight-bold">Gold Weight</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
               
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
   <Col  >
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label className="font-weight-bold">Due date</Form.Label>
   <Form.Control type="text" placeholder="aadharId" />
 </Form.Group>
 </Col>
 </Row>
 <Row className="justify-content-md-center">
   <Col  >
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label className="font-weight-bold">Gold type</Form.Label>
   <Form.Control type="text" placeholder="accountno" />
 </Form.Group>
 </Col>
 </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label className="font-weight-bold">Gold Amount</Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>
          <Form.Group className="position-relative mb-3">
           
          </Form.Group>
          <Button type="submit"><Link to="/GoldDetails">Next</Link></Button>
        </Form>   
    </Container>
        </>
    );
}
export default display;