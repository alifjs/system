import React from 'react';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';
import Guardian_signup_modal from './Guardian_signup_modal';
import Caregiver_signup_modal from './Caregiver_signup_modal';

const HomeNav = () => {
  const [modalShow, setModalShow] = useState(false)
  const [modalShow_2, setModalShow_2] = useState(false)

  const navbarStyle = {
    backgroundColor: 'rgb(0, 131, 143)',
    minWidth:'100vw',
    marginBottom: '0px',
  };
  const handle_guardian_sign_up=()=>{
    setModalShow(true)
  }
  const handle_caregiver_sign_up=()=>{
    setModalShow_2(true)
  }
  return (
    <>
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Navbar.Brand href="#" className='pt-3 pb-3' style={{fontSize:'30px'}}><h1>Care Aide</h1></Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Services</Nav.Link>
          <Nav.Link href="guardian_search">Log in</Nav.Link>
          <Nav.Link  onClick={handle_guardian_sign_up}>Sign up as guardian</Nav.Link>
          <Nav.Link  onClick={handle_caregiver_sign_up}>Sign up as caregiver</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Guardian_signup_modal show={modalShow} onHide={()=>setModalShow(false)}/>
    <Caregiver_signup_modal show={modalShow_2} onHide={()=>setModalShow_2(false)}/>
    </>
  );
};

export default HomeNav;
