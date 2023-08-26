import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col,Dropdown} from 'react-bootstrap';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import servicesData from './services_info';

function Caregiver_signup_modal(props) {
    let navigate = useNavigate();

    const handle_submit=()=>{
        props.onHide()
        navigate('/')
        setTimeout(() => {
            alert('Your account has been created.');
        }, 300);
    }

    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Sign up as a caregiver
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 className='mb-4'>Fill up the details in the form</h4>
            {/* <h5 className='ps-1 mb-4'>Guardian information</h5> */}
            <FloatingLabel  label="Name" className="mb-2">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel  label="Address" className="mb-2">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel  label="Phone no." className="mb-2">
                <Form.Control type="number" placeholder="" />
            </FloatingLabel>
            <Form.Label className='ms-2'>Gender :</Form.Label>
            <Row className='ms-1 mb-3'>
                <Col className='col-2'>
                    <Form.Check
                        type="radio"
                        name="gender"
                        value="male"
                        label="Male"
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="radio"
                        name="gender"
                        value="female"
                        label="Female"
                    />
                </Col>
            </Row>
            <FloatingLabel  label="Date of birth" className="mb-2">
                <Form.Control type="date" placeholder=""/>
            </FloatingLabel>
            <Form.Label className='ms-2'>Upload NID card : </Form.Label>
            <Form.Control type="file" accept=".pdf" className='ms-2 mb-3'/>
            <Form.Label className='ms-2'>Upload proof of work experience : </Form.Label>
            <Form.Control type="file" accept=".pdf" className='ms-2 mb-3'/>
            <Form.Label className='ms-2'>Upload police clearance certificate : </Form.Label>
            <Form.Control type="file" accept=".pdf" className='ms-2 mb-3'/>
            <FloatingLabel  label="Expected minimum salary per hour " className="mb-2">
            <Form.Control type="number" placeholder="" min="200" max="700"/>
            </FloatingLabel>
            <Form.Label className='ms-2' >Services : </Form.Label>
            <Dropdown className='ms-2 mb-3'>
              <Dropdown.Toggle variant="secondary" id="servicesDropdown" multiple style={{width:'250px',textAlign:'left'}}>
                Select the services you provide
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {servicesData.map((service) => (
                    <Form.Check type="checkbox" label={service.title} id={service.title} />
                ))}  
              </Dropdown.Menu>
            </Dropdown>
            <Form.Label className='ms-2'>About yourself :</Form.Label>
            <Form.Control as="textarea" rows={3} name="medicalCondition" className='ms-2 mb-3' placeholder='Write about your services, experience and what you can offer to your patients.'/>
            <Button className='mt-3 ms-2'variant="primary" type="submit" onClick={handle_submit}>
                Submit
            </Button>

        </Modal.Body>
        <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    )
}
export default Caregiver_signup_modal