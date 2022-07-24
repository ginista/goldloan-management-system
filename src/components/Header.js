import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { useUserAuth } from "../context/UserAuthContext";

function Header() {
  const { logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <Navbar expand="lg" variant="light" bg="dark" >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>Gold Loan Management System</Navbar.Brand>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <Nav.Item>
                <Nav.Link as={Link} to="/LoanApply" style={{ color: "white" }}>Apply</Nav.Link>
              </Nav.Item>
            </Navbar.Text>
            <Navbar.Text>
              <Nav.Item>
                <Nav.Link as={Link} to="/Search" style={{ color: "white" }}>Search</Nav.Link>
              </Nav.Item>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/" style={{ color: "white" }}> <Button
                variant="outline-secondary"
                className="text-center px-4 mt-0 mb-0"
                onClick={handleLogOut}
              >
                Log out
              </Button></Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
