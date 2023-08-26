import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const GuardianNav = () => {
  const navbarStyle = {
    backgroundColor: 'rgb(0, 131, 143)',
    minWidth:'100vw',
    marginBottom: '0px',
  };

  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Navbar.Brand href="/" className='pt-3 pb-3' style={{fontSize:'30px'}}><h1>Care Aide</h1></Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/guardian_search">Search for a caregiver</Nav.Link>
          <Nav.Link href="">CCTV footage</Nav.Link>
          <Nav.Link href="/guardian_chat">Chat</Nav.Link>
          <Nav.Link href="guardian_rating">Rate and Review</Nav.Link>
          <Nav.Link href="">Emergency helpline</Nav.Link>
          <Nav.Link href="/">Log out</Nav.Link>
          {/* Add more links as needed */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default GuardianNav;