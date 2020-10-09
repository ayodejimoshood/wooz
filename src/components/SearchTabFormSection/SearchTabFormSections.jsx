import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import SelectTabForm from '../SearchTabFormSection/SelectTab'
import MultiStepper from '../MultiStepper/InsuranceFlightSearchMultiStepper'

class SearchTabFormSections extends Component {
    render() {
        return (
            <div>
                {/* <div className='container-fluid'> */}
                <Container style={{marginTop: '-107px', maxWidth: '100%' }}></Container>
                <MultiStepper style={{color: 'green'}} />
                
            {/* </div> */}
            </div>
        );
    }
}

export default SearchTabFormSections;
