import React from 'react'
import { Container,  Dropdown,Row, Col, Form, Button } from 'react-bootstrap';
import servicesData from './services_info';

function Search_Form() {
  return (
    <>
    <Form>
      <Row className='d-flex justify-content-evenly' style={{width:'80vw'}} >
        <Col className='col-2'>
          <Form.Group controlId="searchForm">
            <Form.Label>Area</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="areaDropdown" style={{width:'200px',textAlign:'left'}}>
                Select Area
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form.Check type="checkbox" label="Uttara" id="areaUttara" />
                <Form.Check type="checkbox" label="Banani" id="areaBanani" />
                <Form.Check type="checkbox" label="Gulshan" id="areaGulshan" />
                <Form.Check type="checkbox" label="Mohakhali" id="areaMohakhali" />
                <Form.Check type="checkbox" label="Dhanmondi" id="areaDhanmondi" />
                <Form.Check type="checkbox" label="Mohammadpur" id="areaMohammadpur" />
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>

        <Col className='col-2'>
          <Form.Group controlId="genderForm">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col className='col-2'>
          <Form.Group controlId="servicesForm">
            <Form.Label>Services</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="servicesDropdown" multiple style={{width:'200px',textAlign:'left'}}>
                Select Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {servicesData.map((service) => (
                    <Form.Check type="checkbox" label={service.title} id={service.title} />
                ))}  
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>

        <Col className='col-2'>
          <Form.Group controlId="ratingForm">
            <Form.Label>Min Rating</Form.Label>
            <Form.Control type="number" min="0" max="5" step="0.1" defaultValue="3.5" />
          </Form.Group>
        </Col>

        <Col className='col-2'>
          <Form.Group controlId="salaryForm">
            <Form.Label>Salary Range</Form.Label>
            <Form.Control type="text" placeholder="Enter Salary Range" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
    <Row className='d-flex justify-content-end' style={{width:'80vw'}} >
      <Button  type="submit"  onClick={() => {window.location.reload()}} style={{width:'100px',marginRight:'100px',marginTop:'20px',backgroundColor:'rgb(0, 131, 143)',borderWidth:'0px'}}>
        Filter
      </Button>
    </Row>
    <Row/>
    </>
  )
}

export default Search_Form