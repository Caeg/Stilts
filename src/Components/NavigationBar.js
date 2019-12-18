import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    position: abosulte;
    top: 0;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: pink;
    }
  }
`;




export const NavigationBar = () => (
  <Styles>
      <Navbar  bg="Dark" expand="lg">
      <Navbar.Brand href="#home">STILTS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav classname = "ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Nav>
        <Nav className = "ml-auto">
          <Nav.Item><Nav.Link href ="/About">Sign In</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href ="/Contact">Sign Up</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
    
  </Styles >


)