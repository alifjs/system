import React, { useState } from 'react';
import { Accordion, Card, Form, Button } from 'react-bootstrap';
import caregivers from './caregiver_list'

function RatingAccordion() {
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});

  const handleRatingChange = (caregiverName, rating) => {
    setRatings(prevRatings => ({ ...prevRatings, [caregiverName]: rating }));
  };

  const handleReviewChange = (caregiverName, review) => {
    setReviews(prevReviews => ({ ...prevReviews, [caregiverName]: review }));
  };

  const handleSubmit = () => {
    // Save ratings and reviews
    // You can implement the logic to save the ratings and reviews here
    console.log('Ratings:', ratings);
    console.log('Reviews:', reviews);
  };

  return (
    <Accordion defaultActiveKey="0" style={{width:"70vw"}}>
    <h1 className="mb-4" style={{ fontSize:'40px',marginTop:'50px',paddingBottom:'20px' }}>Rate and give feedback about your caregivers</h1>
      {caregivers.slice(0,7).map((caregiver, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header ><p style={{fontSize:'25px'}}>{caregiver.Name}</p></Accordion.Header>
          <Accordion.Body>
            <Form style={{fontSize:'20px'}}>
              <Form.Group controlId={`rating-${caregiver.Name}`}>
                <Form.Label>Rating:</Form.Label>
                <Form.Control
                  as="select"
                  value={ratings[caregiver.Name] || ''}
                  onChange={e => handleRatingChange(caregiver.Name, e.target.value)}
                >
                  <option value="">Select rating...</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId={`review-${caregiver.Name}`} style={{marginTop:'20px'}}>
                <Form.Label>Review:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={reviews[caregiver.Name] || ''}
                  onChange={e => handleReviewChange(caregiver.Name, e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" style={{marginTop:'20px'}} onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default RatingAccordion;
