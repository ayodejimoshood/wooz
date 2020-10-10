import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Modal, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
import ButtonToggle from './ButtonToggle'
import TravelInsuranceImg from '../../assets/img/icons/onthego/travelinsurance.png'

function PassengerCard() {

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

    setValidated(true);
    };

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            {/* <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <br/>
              <h4 style={{color: '#043f7c'}}> <b>Buy Travel Insurance</b> </h4>
                <Row>
                    <Col sm={6} className='mb-4'>
                        <br/>
                        <br/>
                        
                        {/* <img width='150px' src={TravelInsuranceImg} alt=""/> */}
                        <p>General (Business / Tourism)</p>
                        <p>Pilgrimage Protection</p>
                        <p>Student Protection</p>
                        <br/>
                        <br/>
                        <Button variant="outline-danger">Skip</Button>{' '}
                        <Button variant="danger"> <a href="/onthego/flightsearch/insurance">Proceed</a> </Button>{' '}
                    </Col>
                    <Col sm={6} className='mb-4'>
                        <img width='350px' src={TravelInsuranceImg} alt=""/>
                    </Col>
                </Row>
                
            </Modal.Body>
            {/* <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
          </Modal>
        );
      }
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Card>
                <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                    <p style={{color: '#043f7c'}}> <b>Main Passenger (Adult)</b> </p>
                    <hr style={{color: '#043f7c'}}/>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label> <h6>First Name <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Mark" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Last Name <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Middle Name <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Date of Birth <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Row>
                                    <Col md='4'>
                                        <Form.Control as='select'>
                                            <option>Day</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                            <option>06</option>
                                            <option>07</option>
                                            <option>08</option>
                                            <option>09</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md='4'>
                                        <Form.Control as='select'>
                                            <option>Month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md='4'>
                                        <Form.Control as='select'>
                                            <option>Year</option>
                                            <option>Abia</option>
                                            <option>Adamawa</option>
                                            <option>Akwa Ibom</option>
                                            <option>Anambra</option>
                                            <option>Bauchi</option>
                                            <option>Bayelsa</option>
                                            <option>Benue</option>
                                            <option>Borno</option>
                                            <option>Cross River</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Email Address <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Append>
                                        <Button style={{borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}} variant="secondary">
                                            {/* <i class="nigeria flag"></i> */}
                                            NGN
                                        </Button>
                                    </InputGroup.Append>
                                    <Form.Control required type="text" defaultValuexx="Otto" />
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <PhoneInput style={{width: '100px'}} inputProps={{ name: 'phone', required: true, autoFocus: false }} />
                                    </InputGroup.Prepend>
                                    <Form.Control.Feedback type="invalid"> Please choose a username. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group> */}
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Address 1 <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Address 2 <span style={{color: '#043f7c'}}>(Optional)</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>City <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Postal Code <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>State / Region <span style={{color: '#043f7c'}}>(Optional)</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label> <h6>Country of Residence <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValuexx="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <br/>
                            <Row >
                                <Col md='2'>
                                    <ButtonToggle/>
                                </Col>
                                <Col md='10'>
                                    <span style={{fontSize: '13.4px'}}>Create an account for faster booking.
                                        <a variant="primary" onClick={() => setModalShow(true)}> <b  style={{color: 'red'}}>See Benefits</b> </a>
                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </span>
                                </Col>
                            </Row>
                            
                        </Form.Row>
                    </Form>
                </div>
            </Card>
        </div>
        
    )
}

export default PassengerCard
