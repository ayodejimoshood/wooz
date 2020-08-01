import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import bannerimage from '../../assets/img/bannerimg/insurance.jpg'

class InsuranceBannerSections extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${bannerimage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white' }} >
                <Container className='p-4' style={{ maxWidth: '100%',  }}>
                    <Breadcrumb style={{backgroundColor: 'none! important'}} >
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/moneymatters">Money Matters</Breadcrumb.Item>
                        <Breadcrumb.Item active>Insurance</Breadcrumb.Item>
                    </Breadcrumb>
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <br/>
                                <br/>
                                <br/>
                                <h2 style={{ fontWeight: '500px'}}>Travel, Motor &amp; Life Insurance Search</h2>
                                <br/>
                                
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default InsuranceBannerSections;