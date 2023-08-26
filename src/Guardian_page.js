import React from 'react'
import { Container,  Dropdown,Row, Col, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import sitting_ladies from './pictures/two_sitting.png';
import servicesData from './services_info';
import caregivers from './caregiver_list'
import c1 from './pictures/c1.jpg';
import c2 from './pictures/c2.jpg';
import c3 from './pictures/c3.jpg';
import c4 from './pictures/c4.jpg';
import c5 from './pictures/c5.jpg';
import c6 from './pictures/c6.jpg';

import HomeNav from './HomeNav';
import GuardianNav from './Guardian_Nav';
import Search_Form from './Search_Form';
import CaregiverCard from './CaregiverCard';

function Guardian_page() {

    return (
    <Container fluid className=" d-flex flex-column align-items-center " style={{minHeight:'100vh',fontSize:"20px",backgroundColor:'white',fontFamily: "Nunito, sans-serif"}}>
        <GuardianNav />
        <div style={{ maxWidth:'300px', maxHeight: '100%', overflow: 'hidden',marginTop:'50px'}}>
            <img src={sitting_ladies} alt="Caregiver" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
        </div>
        <Row className="d-flex align-items-center justify-content-center" style={{ maxWidth: '100%',marginTop:'30px' }}>
            <Col >
                <h1 className="mb-4" style={{ fontSize:'65px' }}>Search for caregivers </h1>
            </Col>
        </Row>
        <Search_Form/>
        {/* //////////// */}
        <Row className="d-flex align-items-center justify-content-evenly" style={{ maxWidth: '100%', marginTop: '80px' }}>
            {caregivers.slice(0, 3).map((caregiver,index) => (
                <Col>
                    <CaregiverCard caregiver={caregiver} img_no={index} />    
                </Col>
            ))}
        </Row>
        <Row className="d-flex align-items-center justify-content-evenly" style={{ maxWidth: '100%', marginTop: '30px' }}>
            {caregivers.slice(4,7).map((caregiver,index) => (
                <Col>
                    <CaregiverCard caregiver={caregiver} img_no={index+3} />    
                </Col>
            ))}
        </Row>

    </Container>
    )
}

export default Guardian_page