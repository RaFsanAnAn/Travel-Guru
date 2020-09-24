import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import allHotels from '../../Fakedata/hotels';
import HotelDetails from '../HotelDetails/HotelDetails';


const Hotels = () => {
    const { name } = useParams();
    console.log(name);
    const hotels = allHotels.filter(data => data.location === name);
    console.log(hotels);


    return (
        <div id="background">
            <Container>
                <Row className="container">
                    <Col md={7} className="ml-auto">
                        <div className="m-3">
                            <h4><strong>Stay in {name}</strong></h4> <br />
                        </div>
                        {
                            hotels.map(hotel => <HotelDetails key={hotel.id} hotel={hotel}></HotelDetails>)
                        }
                    </Col>
                    <Col md={5} >


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hotels;