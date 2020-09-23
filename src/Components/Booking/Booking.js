import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Booking.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import location from '../../Fakedata/location'

const Booking = () => {
    const { id } = useParams()
    const info = location[id];

    const [startDate, setStartDate] = useState(new Date("2020/09/22"));
    const [endDate, setEndDate] = useState(new Date("2020/09/29"));

    return (
        <div>
            <Container>
                <Row className="container">
                    <Col md={7} className="ml-auto">
                    <br/>
                        <h2>{info.name}</h2>
                        <br/>
                        <h5>{info.details}</h5>
                        <br />
                    </Col>
                    <Col md={5} className="form">
                        <Form action="" style={{ background: 'white', padding: '20px 20px', borderRadius: '20px' }}>
                            <br />
                            <Form.Group >
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text" value="Dhaka" required/>
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" value={info.name} required/>
                            </Form.Group>
                            <br />
                            <Row className="justify-content-between">
                                <Col md={6} >
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        selectsStart
                                        closeOnScroll={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                    />
                                </Col>

                                <Col md={6} >
                                    <DatePicker
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        selectsEnd
                                        closeOnScroll={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <center>  <Link to={`/hotels/${info.name}`}>
                                <Button variant="warning" type="submit">
                                    Submit
                                 </Button>
                            </Link> </center>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;