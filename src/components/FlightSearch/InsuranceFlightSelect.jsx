import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Breadcrumb,
    Button,
    Card,
} from 'react-bootstrap';
import AboutSection from '../AboutSection/AboutSections';
import ButtonGroup from '../ButtonGroup/ButtonGroups';
import MotorInsuranceInnerTabPanel from '../Insurance/MotorInsurance/MotorInsurance';
import SearchTabFormSection from '../SearchTabFormSection/SearchTabFormSections';

class InsuranceFlightSelect extends Component {
    render() {
        return (
            <div>
                <Container className="" style={{ maxWidth: '100%' }}>
                    <p></p>
                    

                    {/* <br/> */}
                    {/* <ButtonGroup /> */}
                </Container>
                <br />
                <br />
                <br />
                <br />
                <MotorInsuranceInnerTabPanel />
                {/* <SearchTabFormSection /> */}
                {/* <SearchTabFormSection /> */}
                <br />
                {/* <FormCardSection /> */}

                {/* <BannerSection />
                <InsuranceThumbnailSection /> */}
            </div>
        );
    }
}

export default InsuranceFlightSelect;
