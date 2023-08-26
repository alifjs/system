import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import HomeNav from './HomeNav';
import ServiceCard from './ServiceCard';
import Our_services from './Our_services';
import image from './pictures/old people.png';
import person1 from './pictures/person1.jpg'
import person3 from './pictures/person3.jpg'
import person5 from './pictures/person5.jpg'
import human3 from './pictures/human3.jpeg'
import servicesData from './services_info';
import First_page from './First_page';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const HomePage = () => {

  const testimonials = [
    {
      name: 'Rohan Ahmed',
      text: "Care Aide has been a true blessing for our family. Their user-friendly platform seamlessly connects us with dedicated caregivers who bring comfort and compassion to our loved ones. The emphasis on thorough screening and real-time communication ensures we can trust the care provided.",
      img_name: person1,
    },
    {
      name: 'Saira Rahman',
      text: "We're incredibly grateful for Care Aide's innovative approach to caregiving. Their platform not only provides exceptional support for care recipients but also empowers caregivers with meaningful employment opportunities. The personalized search options, video monitoring, and secure access to medical records set Care Aide apart.",
      img_name: person3,
    },
    {
      name: 'Imran Chowdhury',
      text: "Care Aide's commitment to improving the caregiving landscape shines through in every aspect. Their dedication to matching families with reliable caregivers has brought much-needed relief to our lives. The platform's emphasis on user feedback and caregiver well-being is truly commendable.",
      img_name: person1,
    },
    {
      name: 'Nadia Ali',
      text: "With Care Aide, we've found a source of unwavering support for our family. The platform's personalized search options made it easy to connect with a caregiver who understands our needs. The real-time communication and secure access to medical records add an extra layer of reassurance.",
      img_name: person5,
    },
    {
      name: 'Aisha Rahman',
      text: "Care Aide's vision of a society with exceptional care and meaningful work is evident in their platform. Our family has experienced firsthand the difference their innovative approach makes. The emphasis on caregiver empowerment and user satisfaction is truly remarkable.",
      img_name: person3,
    },
    {
      name: 'Kamal Hussain',
      text: "We can't thank Care Aide enough for their dedication to caregiving excellence. The platform's commitment to screening, personalized search, and real-time communication has transformed the way we provide care for our loved ones. Care Aide's focus on compassion and reliability is truly a game-changer.",
      img_name: person5,
    }
  ]

  return (
    <Container fluid className="vh-100 d-flex flex-column align-items-center " style={{fontSize:"20px",backgroundColor:'white',fontFamily: "Nunito, sans-serif"}}>
    <HomeNav/>
    <First_page/>
    <Our_services/>
    <Row className="pb-4 d-flex flex-column align-items-center justify-content-center" style={{minWidth:'100vw'}}>
    <h1 className="mt-5" style={{ fontSize:'65px',textAlign:'center',marginBottom:'80px'}}>Testimonials</h1>
    <Carousel style={{ color: 'black', width: '1000px'}}>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index} >
          <div className="d-flex justify-content-center">
            <Card style={{ width: '1000px',height:'480px',padding:'30px',borderRadius:'5px',borderWidth:'0px'}}>
              <div className='d-flex justify-content-center mb-2 'style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
                <img src={testimonial.img_name} alt={testimonial.name} className="img-fluid rounded-circle" style={{ width: '150px', height: 'auto' }} />
              </div>
              <Card.Body className='mt-4 d-flex flex-column align-items-center justify-content-center 'style={{backgroundColor: 'rgba(0, 131, 143,0.3)',minWidth:'100%',padding:'5px 10px 10px 0',borderRadius:'10px',minHeight:'250px'}}>
                <Card.Title style={{textAlign:'center',marginTop:'10px',marginBottom:'15px',fontWeight:'700'}}>{testimonial.name}</Card.Title>
                <Card.Text style={{textAlign:'center',fontSize:'18px',padding:'0 20px 20px 0'}}>{testimonial.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

    </Row>
  </Container>
  );
};

export default HomePage;
