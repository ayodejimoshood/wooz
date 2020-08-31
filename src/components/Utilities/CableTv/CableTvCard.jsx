import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
import ButtonToggle from '../../SearchTabFormSection/ButtonToggle'

function CableTvCard() {

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
            
            <Card style={{ backgroundColor: '#ffffff', padding: '20px', border: 'none'}}>
                {/* <div style={{ backgroundColor: '#ffffff', padding: '20px'}}> */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>TV Operator <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                
                                    <Form.Control as='select'>
                                        <option>DSTv</option>
                                        <option>GoTv</option>
                                        <option>Startimes</option>
                                    </Form.Control>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                            {/* <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Prepend>
                                        <PhoneInput style={{width: '500px'}} inputProps={{ name: 'phone', required: true, autoFocus: false }} />
                                    </InputGroup.Prepend>
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group> */}
                            <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6>Smart Card Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    {/* <InputGroup.Append>
                                        <Button style={{borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}} variant="secondary">
                                            NGN
                                        </Button>
                                    </InputGroup.Append> */}
                                    <Form.Control required type="text" defaultValuexx="Otto" />
                                    <Form.Control.Feedback type="invalid"> Enter a valid smartcard number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Preferred Package <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                
                                    <Form.Control as='select'>
                                        <option>DSTv Premium - &#8358;16,200</option>
                                        <option>DSTv Compact Plus  - &#8358;10,925</option>
                                        <option>DSTv Compact - &#8358;6,975</option>
                                        <option>DSTv Comfam - &#8358;4,615</option>
                                        <option>DSTv Yanga - &#8358;2,565</option>
                                        <option>DSTv Padi - &#8358;1,850</option>
                                    </Form.Control>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Append>
                                        <Button style={{borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}} variant="secondary">
                                            NGN
                                        </Button>
                                    </InputGroup.Append>
                                    <Form.Control required type="text" defaultValuexx="Otto" />
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Preferred Package <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup className="">
                                <InputGroup.Append>
                                    <Button style={{borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}} variant="secondary">
                                        &#8358;
                                    </Button>
                                </InputGroup.Append>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                </InputGroup>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group> */}
                            
                            {/* <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Email Address <span style={{fontSize: '12px'}}>(Optional)</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group> */}
                            
                        </Form.Row>
                    </Form>
                {/* </div> */}
            </Card>
        </div>
        
    )
}

export default CableTvCard
