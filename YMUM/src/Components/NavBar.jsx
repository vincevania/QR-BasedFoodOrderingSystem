import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" style={{display:'flex', justifyContent:'center', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textDecoration: 'none', color: '#fff' }}>Menu</Nav.Link>
            <Nav.Link href="#article" style={{display:'flex', justifyContent:'center', marginLeft: '0.2rem', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textDecoration: 'none', color: '#fff' }}>Article</Nav.Link>
            <Nav.Link href="#contact" style={{display:'flex', justifyContent:'center', marginLeft: '0.2rem', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textDecoration: 'none', color: '#fff' }}>Connect</Nav.Link>
            <Nav.Link href="#offers" style={{display:'flex', justifyContent:'center', marginLeft: '0.2rem', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textDecoration: 'none', color: '#fff' }}>Offers</Nav.Link>
            <Nav.Link href="#Admin" style={{display:'flex', justifyContent:'center', marginLeft: '0.2rem', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textDecoration: 'none', color: '#fff' }}>Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
