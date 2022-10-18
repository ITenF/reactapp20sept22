import Container from 'react-bootstrap/Container';
//menu bar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//for the links in the menu
import {LinkContainer} from "react-router-bootstrap"
//images
import Image from "react-bootstrap/Image"
import logo from './images/itenf-logo.png';
//styles
import './styles/Bootstrap-navbar.css'

function Bootstrapnavbarfun() {
  return (
    <Container fluid>
    <Navbar bg="light" variant="light" expand="lg"  >
        <Navbar.Brand href="#home">
            <Image src={logo} roundedCircle="true"  alt="logo" className='itenf-logo' />
        </Navbar.Brand>
        <Container  className="justify-content-end" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <LinkContainer to="/processor"><Nav.Link>Processor</Nav.Link></LinkContainer>
            <LinkContainer to="/opslag"><Nav.Link>Opslag</Nav.Link></LinkContainer>
            <LinkContainer to="/hardware">
              <NavDropdown title="Hardware" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://google.com">Processor</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Opslag</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">In- en uitvoer</NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="/opslag"><NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </LinkContainer>
            <NavDropdown title="Software" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Apps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Programmeertalen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">In- en uitvoer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#computertaal">Computertaal</Nav.Link>
            <NavDropdown title="Servers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web-server</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Email-server</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Bootstrapnavbarfun;