import React, { useState, useEffect } from 'react';
import {
    Jumbotron,
    Nav,
    Container,
    Modal,
    Row,
    Col,
    Form,
    InputGroup,
    FormControl,
    Image,
    Breadcrumb,
    Button,
    Card,
} from 'react-bootstrap';
import OnTheGoBanner from './OnTheGoBanner';
import KioskHeaderNav from '../KioskHeaderNav/KioskHeaderNav';
import FinancialThumbnailSection from '../FinancialThumbnailSection/FinancialThumbnailSections';
import DealsSection from '../DealsSection/DealsSections';
import OnTheGoTab from '../OnTheGoTab/OnTheGoTabs';

import bannerimage from '../../assets/video/onthego.gif';
import busbannerimage from '../../assets/video/bus.gif';
import ferriesbannerimage from '../../assets/video/ferries.gif';
import trainbannerimage from '../../assets/video/train.gif';
import cruisebannerimage from '../../assets/video/cruiseship.gif';
import shippingbannerimage from '../../assets/video/shipping.jpg';
import play from '../../assets/img/icons/playbutton.png';

import FooterSection from '../FooterSection/FooterSection';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {/* <iframe width="100%" height="478" src="https://www.youtube.com/embed/m8n2o3Qx504?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <iframe
                width="100%"
                height="478"
                src="https://www.youtube.com/embed/s1q3ALqm2mg?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </Modal>
    );
}

function OnTheGo() {
    const [modalShow, setModalShow] = React.useState(false);
    const [validated, setValidated] = useState(false);
    //kiosk browser state
    const [isBrowser, setBrowser] = useState(false);

    //kiosk header render lifecycle
    useEffect(() => {
        if (window.navigator.userAgent) {
            setBrowser(false);
        }

        if (
            typeof window !== undefined &&
            typeof window.process === 'object' &&
            window.process.type === 'renderer'
        ) {
            setBrowser(true);
        }
    }, []);
    //end kiosk header render lifecycle

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // handleSubmit = (e) => {
        //     e.preventDefault();
        //    this.props.history.push('/motorinsurance')
        // }

        setValidated(true);
    };

    const tabs = [
        {
            title: 'Flights',
            icon: 'djcdfvd',
            backgroundImage: bannerimage,
        },
        {
            title: 'Buses',
            icon: 'djcdfvd',
            backgroundImage: busbannerimage,
        },
        {
            title: 'Ferries',
            icon: 'djcdfvd',
            backgroundImage: ferriesbannerimage,
        },
        
        {
            title: 'Trains',
            icon: 'djcdfvd',
            backgroundImage: trainbannerimage,
        },
        {
            title: 'Cruise',
            icon: 'djcdfvd',
            backgroundImage: cruisebannerimage,
        },
        {
            title: 'Shipping',
            icon: 'djcdfvd',
            backgroundImage: shippingbannerimage,
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const activeTabStyle = {
        backgroundColor: '#043f7c',
        color: '#fff',
    };

    const tabStyle = {
        backgroundColor: '#fff',
        color: '#043f7c',
        borderRight: '1px solid #043f7c',
    };

    const handleOnTabSelect = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{}}>
            {isBrowser && <KioskHeaderNav title="On the Go" />}
            <Container
                className="p-4xx"
                style={{
                    maxWidth: '100%',
                    backgroundImage: `url(${activeTab.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                }}>
                <br />
                {/* <Breadcrumb style={{backgroundColor: 'none! important'}} >
                        <Breadcrumb.Item href="/"> <span style={{color: '#636363'}}> Home </span> </Breadcrumb.Item>
                        <Breadcrumb.Item active href="/onthego"> <span style={{color: '#043f7c'}}>On The Go</span> </Breadcrumb.Item>
                    </Breadcrumb> */}
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link style={{ padding: '.5rem 2.5rem' }} href="#">
                            Book Trip
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            style={{ padding: '.5rem 2.5rem' }}
                            eventKey="link-1">
                            Check In
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            style={{ padding: '.5rem 2.5rem' }}
                            eventKey="link-2">
                            Print Boarding Pass
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            style={{ padding: '.5rem 2.5rem' }}
                            eventKey="link-3">
                            Explore
                        </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                        </Nav.Item> */}
                </Nav>
                <Col lg={12}>
                    <Row>
                        <Col md={9}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            {/* <h2 style={{ fontWeight: '500px', marginLeft: '-20px'}}>Flights, Traines, Trucks, Ferries &amp; Trains - All in One Search</h2> */}

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                        <Col md={3}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <img
                                onClick={() => setModalShow(true)}
                                src={play}
                                alt=""
                            />
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Col>
                <Row style={{ marginTop: '-66px' }}>
                    {tabs.map((item, index) => {
                        return (
                            <Col
                                key={index}
                                sm="2"
                                classNamexx="d-none d-lg-block"
                                style={
                                    activeTab.title == item.title
                                        ? activeTabStyle
                                        : tabStyle
                                }>
                                <a onClick={() => handleOnTabSelect(item)}>
                                    <Card.Footer style={{}}>
                                        <h6
                                            style={{
                                                fontSize: '15px',
                                                textAlign: 'center',
                                            }}>
                                            {' '}
                                            {item.title}
                                        </h6>
                                    </Card.Footer>
                                </a>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            <Container
                style={{ backgroundColor: '#043f7c', paddingTop: '20px' }}
                direction="row"
                fluid>
                {/* <Row style={{ marginTop: '-66px' }}>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Flights</h6>
                    </Col>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Buses</h6>
                    </Col>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Ferries</h6>
                    </Col>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Trains</h6>
                    </Col>
                </Row> */}
                <Card
                    style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Body>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                            stylex={{ marginTop: '14px', height: '55px' }}>
                            <Form.Row
                                stylex={{
                                    backgroundColor: '#043f7c',
                                    width: '100%',
                                    paddingTop: '20px',
                                }}>
                                <InputGroup className="mb-4" as={Col} md="3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i class="fa fa-map-marker"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    {/* <fromdata /> */}
                                    <FormControl
                                        style={{
                                            borderTopRightRadius: '4px',
                                            borderBottomRightRadius: '4px',
                                        }}
                                        id="inlineFormInputGroup"
                                        placeholder="From:"
                                        required
                                        type="text"
                                        defaultValue="Murtala Mohammed Airport"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i class="fa fa-map-marker"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        style={{
                                            borderTopRightRadius: '4px',
                                            borderBottomRightRadius: '4px',
                                        }}
                                        id="inlineFormInputGroup"
                                        placeholder="To:"
                                        required
                                        type="text"
                                        defaultValue="London, England"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </InputGroup>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
                                    <InputGroup>
                                        <FormControl placeholder="Depature Date" />
                                        <FormControl placeholder="+ Add Return" />
                                    </InputGroup>
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Passengers"
                                        defaultValuexx="Mark"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button
                                        href="onthego/flightsearch"
                                        variant="danger"
                                        style={{ width: '100%' }}
                                        type="submit">
                                        {' '}
                                        Search{' '}
                                    </Button>
                                    {/* <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button> */}
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <br />
            <br />
            <DealsSection />
            <br />
            <br />
            <br />
            <DealsSection />
            <br />
            <br />
            <br />
            <FooterSection />
        </div>
    );
}

export default OnTheGo;
