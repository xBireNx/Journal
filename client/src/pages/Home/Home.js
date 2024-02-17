import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "./Home.css";
import ChartLine from "./ChartLine";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="home-div">
      {/* <Container> */}
      <div className="home-head">
        <Row>
          <Col xs="12" md="7" lg="7">
            Hello BireN!!
          </Col>
          <Col xs="12" md="5" lg="5">
            <Row>
              <Col xs="12" md="4" lg="4">
                <Button variant="primary">Add New</Button>
              </Col>
              <Col xs="12" md="4" lg="4">
                <Button variant="primary">Detailed Page</Button>
              </Col>
              <Col xs="12" md="4" lg="4">
                {" "}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Acc 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Acc 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Acc 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs="12" md="3" lg="3">
          <div className="glass-div">hi</div>
        </Col>
        <Col xs="12" md="3" lg="3">
          <div className="glass-div"></div>
        </Col>
        <Col xs="12" md="3" lg="3">
          <div className="glass-div"></div>
        </Col>
        <Col xs="12" md="3" lg="3">
          <div className="glass-div"></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChartLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default Home;
