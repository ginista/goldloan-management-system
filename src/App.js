import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LoanApply from "./components/LoanApply";
import ProtectedRoute from "./components/ProtectedRoute";
import GoldDetails from "./components/GoldDetails";
import SignUp from "./components/SignUp";
import Take from "./components/Take";
import TakeDisplay from "./components/TakeDisplay";
import GiveDisplay from "./components/GiveDisplay";
import InterestRateSelection from "./components/InterestRateSelection";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { UserDetailsContextProvider } from "./context/LoanApplyContext";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="rootPath">
      <UserAuthContextProvider>
        <UserDetailsContextProvider>
          <Header />
          <Container>
            <Row>
              <Col>
                <Routes>
                  <Route
                    path="/LoanApply"
                    element={
                      <ProtectedRoute>
                        <LoanApply />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/GoldDetails" element={
                    <ProtectedRoute><GoldDetails /></ProtectedRoute>} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/Search" element={<ProtectedRoute><Take /></ProtectedRoute>} />
                  <Route path="/TakeDisplay" element={<ProtectedRoute><TakeDisplay /></ProtectedRoute>} />
                  <Route path="/GiveDisplay" element={<ProtectedRoute><GiveDisplay /></ProtectedRoute>} />
                  <Route
                    path="/InterestRateSelection"
                    element={<ProtectedRoute><InterestRateSelection /></ProtectedRoute>}
                  />
                </Routes>
              </Col>
            </Row>
          </Container>
        </UserDetailsContextProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
