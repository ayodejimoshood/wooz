import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'

function Confirmation() {
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

    setValidated(true);
    };
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        {/* <Form.Label>File Damage <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control style={{backgroundColor: '#043f7c', color: 'white'}} required type="text" placeholder="File Damage" defaultValue="File Damage" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Chasis Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Flood Damage" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Vehicle Tracker" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Accidental Damage" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Excess Buyback" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Vehicle Theft" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Towing Benefits" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        {/* <Form.Label>Engine Number <span style={{color: 'red'}}>*</span></Form.Label> */}
                        <Form.Control required type="text" placeholder="Strike &amp; Riots" defaultValuexx="Otto" disabled />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                </Form.Row>
                
                
                {/* <Button type="submit">Proceed <i className="fa fa-arrow-right"></i></Button> */}
            </Form>
        </div>
    )
}

export default Confirmation
