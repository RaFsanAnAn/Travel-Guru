import React, { useState } from 'react';
import cardImg1 from '../../Image/sundorbon.png';
import cardImg2 from '../../Image/Sajek.png';
import cardImg3 from '../../Image/Sreemongol.png';
import location from '../../Fakedata/location'
import { Button, Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [value, setValue] = useState(location[0]);
    const setLocation = (id) => {
        setValue(location[id]);
    };
    return (
        <div >
        <Container>
            <Row>
                <Col md={5} >
                <div style={{ color: 'white', height: '250px' }} className=" mt-5">
                        <h1 className="name"><strong className="name-style">{value.name}</strong></h1> <br/>
                        <p className="details">{value.details}</p>
                    </div>
                    <br />
                    <Link to={`/booking/${value.id}`}><Button className="bg-warning btn-btn-lg">Booking  </Button> </Link>
                </Col>
                <Col md={7}>
                    <CardDeck >
                        <Card  >
                        <button onClick={() => setLocation(0)}  className="place-btn" >
                              <Card.Img variant="top" src={cardImg1} className="card " />
                              </button>
                        </Card>

                        <Card >
                        <button onClick={() => setLocation(1)}  className="place-btn" >
                              <Card.Img variant="top" src={cardImg2} className="card " />
                              </button>
                        </Card>

                        <Card >
                        <button onClick={() => setLocation(2)}  className="place-btn" >
                              <Card.Img variant="top" src={cardImg3} className="card " />
                              </button>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
            </Container>
        </div>      
            );
        };
export default Home;