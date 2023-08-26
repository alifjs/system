import React from 'react';
import { Container,Card, Row, Col } from 'react-bootstrap';
import imag from './pictures/old people.png';
import s1 from './pictures/s1.png';
import s2 from './pictures/s2.png';
import s3 from './pictures/s3.png';
import s4 from './pictures/s4.png';
import s5 from './pictures/s5.png';
import s6 from './pictures/s6.png';
import s7 from './pictures/s7.png';
import s8 from './pictures/s8.png';
import s9 from './pictures/s9.png';
import s10 from './pictures/s10.png';
import s11 from './pictures/s11.png';
import s12 from './pictures/s12.png';
import s13 from './pictures/s13.png';
import s14 from './pictures/s14.png';
import s15 from './pictures/s15.png';
import s16 from './pictures/s16.png';
import s17 from './pictures/s17.png';
import s18 from './pictures/s18.png';
import s19 from './pictures/s19.png';
import s20 from './pictures/s20.png';
import './styles/ServiceCard.css';

const ServiceCard = ({ title, description,img_no}) => {

    const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20];

    return (
    <Card className="service-card" style={{marginBottom:'30px',width:'600px',height:'170px',borderRadius: '10px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <Row>
        <Col style={{paddingRight:'0px'}} className='col-3' >
            <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
                <img src={images[img_no]} alt="Caregiver" className="img-fluid" style={{ width: '100%',borderTopLeftRadius:'10px'}} />
            </div>
        </Col>
        <Col style={{paddingLeft:'0px'}}>
            <Card.Body>
            <Card.Title className='mb-3'style={{fontSize:'25px',fontWeight:'700',opacity:'0.7'}}>{title}</Card.Title>
            <Card.Text style={{opacity:'0.7'}}>
            {description}
            </Card.Text>
            </Card.Body>
        </Col>
        </Row>
    </Card>
    );
};

export default ServiceCard;
