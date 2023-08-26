import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import servicesData from './services_info';
// import image from './pictures/old people.png';


function Our_services() {
  return (
    <Row className="pb-4 d-flex flex-column align-items-center" style={{minWidth:'100vw',backgroundColor:'rgba(0, 131, 143, 0.1)' }}>
        <h1 className="mt-5" style={{ fontSize:'65px',textAlign:'center',marginBottom:'80px'}}>Our Services</h1>
        <Row className="d-flex justify-content-evenly">
        <Col className='col-4'>
                {servicesData.slice(0,7).map((service, index) => (
                    <ServiceCard title={service.title} description={service.description} img_no={index} />
                ))}   
        </Col>
        <Col className='col-4 ' >
                {servicesData.slice(7,14).map((service, index) => (
                    <ServiceCard title={service.title} description={service.description} img_no={index+7}/>
                ))}   
        </Col>
        <Col className='col-4 '>
                {servicesData.slice(14,20).map((service, index) => (
                    <ServiceCard title={service.title} description={service.description} img_no={index+14} />
                ))}   
        </Col>
        </Row>
    </Row>
  )
}

export default Our_services