import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import image from './pictures/old people.png';

function First_page() {
  return (
    <Row className="d-flex align-items-center justify-content-center" style={{ maxWidth: '100%' }}>
        <Col style={{ marginRight: '100px',height:'800px' }} className="col-4 mr-3 bg-white text-black pt-0 p-5 d-flex flex-column justify-content-center">
        <h1 className="mb-4" style={{ fontSize:'65px' }}>Hire the Right Caregiver for your loved one today!</h1>
        <p style={{ fontSize:'25px' }}>
            At Care Aide we ensure trusthworthy experienced caregivers can provide
            care to the special people who need it most.
        </p>
        </Col>
        <Col style={{ height: '500px',marginTop:'50px' }} className="col-4 pt-0 d-flex align-items-center justify-content-center">
        <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
            <img src={image} alt="Caregiver" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
        </div>
        </Col>
    </Row>
  )
}

export default First_page