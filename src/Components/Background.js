import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Image } from "react-bootstrap";
import backgroundPicture from '../Pictures/StiltsWallpaper.gif';

const Styles = styled.div`
    .img{
        
    }

`;

export const Background = () => (
  <Styles>
      <img src = {backgroundPicture} alt = "We're all homies" height = '100%' width = '100%' background-attachment = 'fixed'/>
    
      
  </Styles >
)