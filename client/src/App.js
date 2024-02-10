import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>Box 1</Col>
        <Col xs={12} md={3}>Box 2</Col>
        <Col xs={12} md={3}>Box 3</Col>
        <Col xs={12} md={3}>Box 4</Col>
      </Row>
      <Row>
        <Col>Graph</Col>
      </Row>
      <Row>
        <Col>Table</Col>
      </Row>
    </Container>
  );
}

export default App;
