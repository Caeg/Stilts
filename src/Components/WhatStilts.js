import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import { Form, Button, FormGroup, FormControl, ControlLabel, Container, Row, Col, Card, Image, ImageBackground} from "react-bootstrap";
import GettingNoticed from '../Pictures/GettingNoticed.png';
import AChallangerGiraffe from '../Pictures/AChallangerGiraffe.png';
import GiraffeAndFriends from '../Pictures/GiraffeAndFriends.png';
import StiltsLogo from '../Pictures/StiltsLogo.png';
import WhoGiraffeDisIs from '../Pictures/WhoGiraffeDisIs.png';
import Giraffabilities from '../Pictures/Giraffeabilities.png';
import backgroundPicture from '../Pictures/StiltsWallpaper.gif';


var sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${backgroundPicture})`
  
};


const Styles = styled.div`
    .jumbotron
    {
    background-color:#f2a949;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    corner-radius: 10%;
    }

    #WhatDiv{
     
      
    }

    h1{
      color: #DCDBDB;
    }

    p{
      color: white;
    }

   
#card{
  color: black;
}
    
`;

export const WhatStilts = () => (
  <Styles>

     

        {/* <img puglicID = "background" src = {backgroundPicture} alt = "We're all homies" postion = 'fixed' position = 'fixed'>

          
        </img> */}
        
        
        <section style={ sectionStyle }>
        <div id = "WhatDiv">
          <Container>
            <Row>
                <Col xs lg = "3">
                  <div id = "WhatText">
                  <h1>What is Stilts?</h1>
                  <p>Stilts is a platform designed to help gamers find old friends and new oppertunities! Find old friends from MMO's like Maplestory, World of Warcraft, and Runescape and find new friends to play with on games like Halo!</p>
                  </div>
              
                </Col>
                <Col md={{ span: 4, offset: 4 }}> <img src = {Giraffabilities} alt = "We're all homies" height = {300} width = {300}/></Col>
            </Row>
          </Container>
        </div>

          <Container>
            <Row>
              <Col xs lg = "6">
                <h1>Why should I be on Stilts?</h1>
              </Col>
            </Row>


            <Row>
              <Col>

                <Card bg="dark" text="white" style={{ width: '20rem' }}>
                <img src = {StiltsLogo} alt = "We're all homies" height = {300} width = {300}/>
                <Card.Body>
                  <Card.Title>Find Old Friends</Card.Title>
                  <Card.Text>
                    <p2>
                    With the search function, you can look for old friends throughout many different games!
                    </p2>
                  </Card.Text>
                </Card.Body>
                </Card>
              </Col>

              <Col>
              <Card bg="dark" text="white" style={{ width: '20rem' }}>
              <img src = {GiraffeAndFriends} alt = "We're all homies" height = {300} width = {300}/>
                <Card.Body>
                  <Card.Title>Make New Friends</Card.Title>
                  <Card.Text>
                    <p2>
                      Connect with others to create new gaming buddies for the many games you play.
                    </p2>
                  </Card.Text>
                </Card.Body>
                </Card>
              </Col>

              <Col>
              <Card bg="dark" text="white" tyle={{ width: '20rem' }}>
              <img src = {AChallangerGiraffe} alt = "I see you" height = {300} width = {300}/>
                <Card.Body>
                  <Card.Title>Create new oppertunities</Card.Title>
                  <Card.Text>
                    <p2>
                    Share your accomplishments with your friends and the rest of the gaming community!
                    </p2>
                  </Card.Text>
                </Card.Body>
                </Card>
              </Col>
          </Row>
          </Container>


        </section>


        

        
        
    
  </Styles >
)