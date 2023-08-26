import React from 'react'
import { Container,  Dropdown,Row, Col, Form, Button } from 'react-bootstrap';
import GuardianNav from './Guardian_Nav';
import CaregiverChat from './CaregiverChat';
import './styles/chat.css';

function Chat_page() {
    const caregivers = [
        { id: 1, name: 'Morshed Haque' },
        { id: 2, name: 'Tasnim Ahmed' },
        { id: 3, name: 'Fahim Rahman' },
        { id: 4, name: 'Rabeya Khan' },
        { id: 5, name: 'Imran Ahmed' }
      ];

    return (
    <Container fluid className=" d-flex flex-column align-items-center " style={{minHeight:'100vh',fontSize:"20px",backgroundColor:'white',fontFamily: "Nunito, sans-serif"}}>
    <GuardianNav />
    <div>
      <h1 style={{margin:'50px 0'}}>Caregiver Chat</h1>
      <div className="chat-container">
        {caregivers.map(caregiver => (
          <CaregiverChat key={caregiver.id} caregiver={caregiver} />
        ))}
      </div>
    </div>
    </Container>
    )
}

export default Chat_page