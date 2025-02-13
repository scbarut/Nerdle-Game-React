import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Accordion from 'react-bootstrap/Accordion';
import {
  BrowserRouter,
  Routes,
  Route,
  Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/firstComponent">Nerdle Game</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="firstComponent" element={<FirstComponent/>}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
 
    </div>
    
  );
}

const Home= ()=>(
  <div>
    <br></br>
    <div class="centered-accordion">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Nerdle game?</Accordion.Header>
        <Accordion.Body>
        Nerdle is a puzzle game where players aim to guess a correct mathematical equation in a limited number of tries. 
        Each guess must be a valid equation, and the game provides feedback on the accuracy of numbers and operators used, helping players deduce the correct answer. 
        It's a fun way to test and improve your numerical and arithmetic skills daily.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to play Nerdle?</Accordion.Header>
        <Accordion.Body>
        Enter a mathematically valid equation using digits (0-9) and basic arithmetic symbols (+, -, *, /).
        After each guess, the game provides color-coded feedback. 
        Green indicates the correct number/symbol in the right place, yellow shows the correct number/symbol in the wrong place, and black means the number/symbol is not in the equation.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <br></br>
  <h5>Home page</h5>
  </div>
  );
  
export default App;
