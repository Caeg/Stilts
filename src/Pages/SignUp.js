import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Container, Row, Col, Card } from "react-bootstrap";




const Styles = styled.div`
    .jumbotron
    {
    background-color:#f2a949;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    corner-radius: 10%;
    }

    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },

`;

export const SignUp = () => (
    <Styles>
        <Jumbotron>
            <Container>
             
            </Container>
        </Jumbotron>
  
    </Styles >
  )