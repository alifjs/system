import React from 'react'
import { Card,Container,  Dropdown,Row, Col, Form, Button } from 'react-bootstrap';
import c1 from './pictures/c1.jpg';
import c2 from './pictures/c2.jpg';
import c3 from './pictures/c3.jpg';
import c4 from './pictures/c4.jpg';
import c5 from './pictures/c5.jpg';
import c6 from './pictures/c6.jpg';

function CaregiverCard({ caregiver,img_no}) {

    let images=[c1,c5,c2,c3,c6,c4]

    return (
    <Card style={{ width: '500px', padding: '15px 5px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'  }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card.Img variant="top" src={images[img_no]} style={{ width: '100px', border: '2px double black', padding: '10px' }} />
    </div>
    <Card.Body>
        <Card.Title className='mb-4' style={{ fontWeight: '700' }}>{caregiver.Name}</Card.Title>
        <p>Gender: {caregiver.Gender}</p>
        <p>Area: {caregiver.Area}</p>
        <p>Rating: {caregiver.Rating}</p>
        <p>Expected Salary: {caregiver.ExpectedSalary}</p>
        <p>Services Provided: {caregiver.ServicesProvided}</p>
        <p>About Myself: {caregiver.AboutMyself}</p>
        <Button variant='primary'>Book a consultation call</Button>
    </Card.Body>
    </Card>
    )
}

export default CaregiverCard