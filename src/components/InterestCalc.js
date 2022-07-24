import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { Button ,Form,Row,Col,Container,Dropdown,DropdownButton,InputGroup,FormControl} from 'react-bootstrap';

function InterestCalc(){
return(
<>
<Container>

<Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Amount</Form.Label>
   <Form.Control type="email" placeholder="email" 
     
   />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Gold Weight:</Form.Label>
   <Form.Control type="email" placeholder="email" />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Rate :</Form.Label>
   <Form.Control type="email" placeholder="email" />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Time Period :</Form.Label>
   <Form.Control type="email" placeholder="email" />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Date :</Form.Label>
   <Form.Control type="email" placeholder="email" />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Due Rate :</Form.Label>
   <Form.Control type="email" placeholder="email" />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
   <Col  md="5">
 <Form.Group className="mb-2 mt-3 ">
   <Form.Label>Amount to pay :</Form.Label>
   <Form.Control type="email" placeholder="email" />
 </Form.Group>
 </Col>
 
 </Row>
 <Row className="justify-content-md-center">
 <Col  md="5">
 <Button type="submit"><Link to="/Display">Pay</Link></Button>
 </Col>
 </Row>
 
 </Container>
</>
);
}
export default InterestCalc;