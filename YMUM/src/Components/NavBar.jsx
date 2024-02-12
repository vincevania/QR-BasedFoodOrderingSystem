  import React from 'react'
  import {Container, Col, Row, Navbar, Nav} from 'react-bootstrap'
  import 'bootstrap/dist/css/bootstrap.css';
  import { Link} from 'react-router-dom'
  function NavBar() {
    return (
      <>
        <Navbar >
          <Container>
            <Nav className="mx-auto" > 
              <Nav.Link href="#home"  className="" style={{ marginLeft: '20px', fontFamily: 'Lato, sans-serif', fontSize: "2vw", color: 'whitesmoke'}}>Menu</Nav.Link>
              <Nav.Link href="#article"  className="" style={{ marginLeft: '20px', fontFamily: 'Lato, sans-serif', fontSize: "2vw", color: 'whitesmoke'}}>Article</Nav.Link>
              <Nav.Link href="#contact" className="" style={{ marginLeft: '20px', fontFamily: 'Lato, sans-serif', fontSize: "2vw", color: 'whitesmoke'}}>Connect</Nav.Link>
              <Nav.Link href="#offers" className="" style={{ marginLeft: '20px', fontFamily: 'Lato, sans-serif', fontSize: "2vw", color: 'whitesmoke'}}>Offers</Nav.Link>
              <Nav.Link href="#offers" className="" style={{ marginLeft: '20px', fontFamily: 'Lato, sans-serif', fontSize: "2vw", color: 'whitesmoke'}}>Admin</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }

  export default NavBar