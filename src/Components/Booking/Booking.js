import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import './Booking.css';

const Booking = () => {
    return (
        <div>
        <Container>
            <Row className = "container">
                <Col md={7} className="ml-auto">
                    <h2>Sundarban</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni velit iure a ut laborum facilis odit debitis tenetur perspiciatis ad consectetur, accusamus magnam molestias hic ratione nesciunt non suscipit expedita!</h4>
                    <br/>
                  <Link to = "/booking"> <Button className="bg-warning btn-btn-lg">Booking</Button> </Link>
                </Col>
                <Col md={5} className="form">
                <BookingForm></BookingForm>
               </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Booking;