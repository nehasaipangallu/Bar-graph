import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export  default function Header(){
  return(
    <Container>
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#" className="nav-text"> Overview</Navbar.Brand>
        <Navbar.Brand href="#" className="nav-text"> Cloudwatch</Navbar.Brand>
        <Navbar.Brand href="#" className="nav-text">  optimization</Navbar.Brand>
      </Container>
    </Navbar>
  </Container>
  )
}