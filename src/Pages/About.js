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
  backgroundRepeat: 'no-repeat',
  backgroundAttatchment: 'fixed',
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

    body{
      background-Image: url(${backgroundPicture});
      background-repeat: no-repeat;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
    }

    h1{
      color: #DCDBDB;
    }

    p{
      color: white;
    }

    .WhatIsDiv{
      paddingTop: 100%;
    }

    #WhatText{
      margin-top: 80%;
    }

    #WhatPic{
      margin-top: 50%;
    }
   
    #WhoAmI{
      margin-top: 15%;
    }

    #Why{
      margin-top: 15%;
    }


  

#card{
  color: black;
}
    
`;

export const About = () => (
  <Styles>

     

        {/* <img puglicID = "background" src = {backgroundPicture} alt = "We're all homies" postion = 'fixed' position = 'fixed'>

          
        </img> */}
        
        
        <body>
        <div id = "WhatDiv">
          <Container class = "WhatIsStilts">
            <Row>
                <Col xs lg = "3">
                  <div id = "WhatText">
                  <h1>What is Stilts?</h1>
                  <p>Stilts is a platform designed to help gamers find old friends and new oppertunities! Find old friends from MMO's like Maplestory, World of Warcraft, and Runescape and find new friends to play with on games like Halo!</p>
                  </div>
              
                </Col>
                <Col md={{ span: 4, offset: 4 }}> 
                  <div id = "WhatPic">

                  </div>
                <img src = {Giraffabilities} alt = "We're all homies" height = {300} width = {300}/></Col>
            </Row>
          </Container>
        </div>

        <div id = "Why">
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
              <Card bg="dark" text="white" style={{ width: '20rem' }}>
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
         </div>
          

          <div id = "WhoAmI">
          <Container>
          <Row>
              <Col xs lg = "12">
                <h1>Who's the mastermind behind this awesome project?</h1>
              </Col>
            </Row>


          <Row>
                
                <Col md={{ span: 4, offset: 4 }}>
                <Card bg="dark" text="white" style={{ width: '20rem' }}>
                <img src = {StiltsLogo} alt = "We're all homies" height = {300} width = {300}/>
                <Card.Body>
                  <Card.Text>
                    <p2>
                    My name's Christian Caeg. I'm just a dude who's been playing online games since I was a kid and wanted to find a way to connect with old friends.
                    </p2>
                  </Card.Text>
                </Card.Body>
                </Card>
                </Col>
              
            </Row>
          </Container>
          </div>
         

         

          
        </body>


        

        
        
    
  </Styles >
)