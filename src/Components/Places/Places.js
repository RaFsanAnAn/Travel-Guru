import React from 'react';
import { Button, Card, CardDeck, Col, Row } from 'react-bootstrap';
import './Places.css';
import cardImg1 from '../../Image/Sreemongol.png';
import cardImg2 from '../../Image/Sajek.png';
import cardImg3 from '../../Image/sundorbon.png';
import { Link } from 'react-router-dom';


const Places = () => {
    return (
        <div >
            <Row>
                <Col md={5} className="pl-4">
                    <h2>Sundarban</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni velit iure a ut laborum facilis odit debitis tenetur perspiciatis ad consectetur, accusamus magnam molestias hic ratione nesciunt non suscipit expedita!</h4>
                  <Link to = "/booking"> <Button className="bg-warning btn-btn-lg">Booking  </Button> </Link>
                </Col>
                <Col md={7}>
                    <CardDeck className="p-3">
                        <Card  >
                            <Card.Img variant="top" src={cardImg1} className="card " />
                        </Card>

                        <Card >
                            <Card.Img variant="top" src={cardImg2} className="card " />

                        </Card>

                        <Card >
                            <Card.Img variant="top" src={cardImg3} className="card" />

                        </Card>
                    </CardDeck>
                </Col>
            </Row>


        </div>
    );
};

export default Places;