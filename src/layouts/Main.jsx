import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Home/Shared/Header/Header";
import LeftNav from "../pages/Home/Home/Shared/LeftNav/LeftNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h1>Main content is coming</h1>
          </Col>
          <Col lg={3}>
            <h1>Right nav</h1>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
