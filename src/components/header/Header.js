import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export  default function Header(){
  return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="nav-text">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
  )
}