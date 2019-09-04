import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">立法會議員資料庫</Navbar.Brand>
    </Navbar>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<CustomNavBar />}
        <Container>
          <Row>
            <Col><Button variant="primary">新界東</Button></Col>
            <Col><Button variant="secondary">新界西</Button></Col>
          </Row>
          <Row>
            <Col><Button variant="success">九龍東</Button></Col>
            <Col><Button variant="warning">九龍西</Button></Col>
          </Row>
          <Row>
            <Col><Button variant="danger">港島</Button></Col>
            <Col><Button variant="info">功能</Button></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
