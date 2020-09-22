import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FormPage = () => {
    const [startDate, setStartDate] = useState(new Date("2020/09/22"));
    const [endDate, setEndDate] = useState(new Date("2020/09/29"));
  return (
    <Form  action="" style={{ background: 'white', padding: '20px 20px', borderRadius: '20px' }}>
    <br/>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Origin</Form.Label>
    <Form.Control type="text" placeholder="Dhaka" />
  </Form.Group>
<br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Destination</Form.Label>
    <Form.Control type="text" placeholder="Cox's Bazar" />
  </Form.Group>
  <br/>
<Row className = "justify-content-between">
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
<br/>
 <center>
  <Button  variant="warning" type="submit">
    Submit
  </Button> </center>
</Form>
  );
};

export default FormPage;