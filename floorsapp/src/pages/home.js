import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//elements
import CarouselSlider from '../losseElementen/CarouselSlider';
//images
import computerJongen from '../images/jongenAchterComputer.jpg'
import hardwarevoorbeeld from '../images/hardwareVoorbeeld.jpg'
import softwarevoorbeeld from '../images/softwareCode.jpg'
//styles
import '../styles/home.css'

import { Link } from 'react-router-dom';
import {LinkContainer} from "react-router-bootstrap"
import Nav from 'react-bootstrap/Nav';




function Home(){
  const tekstje = {tekstCard: "hallo daar"};
    return(
        <Container fluid>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col md='auto' className='my-3'>
            <h1 className="text-center">Hoe werkt een computer?</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row >
          <Col sm={4}></Col>
          <Col sm={4} className="my-4">
            <Image
              className=" "
              src={computerJongen} thumbnail
              alt="jongen "
          />
          </Col>
          <Col sm={4}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <p>
              Overal waar we kijken zijn tegenwoordig computers. Met behulp van de computer kunnen we met elkaar communiceren, kennis met elkaar delen, 
              kunnen we ons werk automatiseren zodat we het zelf niet meer hoeven te doen. Kortom we kunnen niet meer zonder.
            </p>
            <p>
              Maar hoe werkt een computer, hoe kan het dat een computer zoveel kan? Wat zit er in een computer of wat heb je nodig om een computer te maken?
            </p>
            <p>
              Op deze website wordt verteld welke onderdelen een computer heeft en wat deze onderdelen doen. Verder wordt er uitgelegd hoe computers met elkaar communiceren
              en wat een server is.
            </p>
            <p>
              Een computer heeft om te werken altijd 2 onderdelen nodig:
            </p>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col  sm={4}>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hardwarevoorbeeld} />
              <Card.Body>
              <Card.Title>Hardware</Card.Title>
              <Card.Text>
                  Dit is een probeer tekst
              </Card.Text>
              <Button variant="primary">
                Lees meer..
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={4} className="bg-colorGreen">
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={softwarevoorbeeld} />
              <Card.Body>
              <Card.Title>Software</Card.Title>
              <Card.Text>
                  Dit is een probeer tekst
              </Card.Text>
              <LinkContainer to="/processor"><Nav.Link>Processor</Nav.Link></LinkContainer>
              <Button variant="primary">
                Lees meer..
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    ) 
}

export default Home;