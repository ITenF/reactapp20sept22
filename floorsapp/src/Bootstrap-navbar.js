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
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <NavDropdown title="Hardware" id="basic-nav-dropdown">
              <LinkContainer to="/processor">
                <NavDropdown.Item>Processor</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/opslag">
                <NavDropdown.Item>Opslag</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/inenuitvoer">
                <NavDropdown.Item>In- en uitvoer</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>              
            <NavDropdown title="Software" id="basic-nav-dropdown">
              <LinkContainer to="/besturingssysteem">
                <NavDropdown.Item>Besturingssyteem</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/uitlegApps">
              <NavDropdown.Item>Apps en applicaties</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Computertaal" id="basic-nav-dropdown">
            <LinkContainer to="/bitsEnBites">
              <NavDropdown.Item >Bits en Bytes</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/programmeertaal">
              <NavDropdown.Item >Programmeertalen</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/serverUitleg"><Nav.Link href="#Servers">Servers</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Bootstrapnavbarfun;