import React from 'react'
import { Container,  Dropdown,Row, Col, Form, Button } from 'react-bootstrap';
import GuardianNav from './Guardian_Nav';
import RatingAccordion from './Rating_accordion';

function Rating_page() {
  return (
    <Container fluid className=" d-flex flex-column align-items-center " style={{minHeight:'100vh',fontSize:"20px",backgroundColor:'white',fontFamily: "Nunito, sans-serif"}}>
        <GuardianNav />
        <RatingAccordion />
    </Container>
  )
}

export default Rating_page