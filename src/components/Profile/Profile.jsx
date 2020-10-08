/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/woozeee-admin-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/woozeee-admin-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from 'reactstrap';
import FooterSection from '../FooterSection/FooterSection';
// core components
// import UserHeader from "components/Headers/UserHeader.js";
// import '../../assets/plugins/nucleo/css/nucleo.css';
import img from '../../assets/img/avatar.jpg';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <>
                {/* <UserHeader /> */}
                {/* Page content */}
                <br />
                <br />
                <br />
                <br />
                <Container className="mb-3" fluidx>
                    <Row>
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a
                                                href="#ayo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }>
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    src={img}
                                                    // src={require("../../assets/img/profile/avatar.jpg")}
                                                />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <CardBody className="pt-0 pt-md-4">
                                    <Row>
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                                <div>
                                                    <span className="heading">
                                                        89
                                                    </span>
                                                    <span className="description">
                                                        Likes
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="heading">
                                                        22
                                                    </span>
                                                    <span className="description">
                                                        Orders
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="heading">
                                                        10
                                                    </span>
                                                    <span className="description">
                                                        Carts
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                    <hr className="my-4" />
                                    <div className="text-center">
                                        <h5>
                                            <i>Ayodeji</i> <b>Moshood</b>
                                            {/* <span className="font-weight-light">, 27</span> */}
                                        </h5>
                                        {/* <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div> */}
                                        {/* <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div> */}
                                        {/* <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p> */}
                                        {/* <a href="#ayo" onClick={e => e.preventDefault()}>
                      Show more
                    </a> */}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-light shadow">
                                <CardHeader className="bg-secondary border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h5 className="mb-0">My account</h5>
                                        </Col>
                                        {/* <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                href="#ayo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                size="sm">
                                                Settings
                                            </Button>
                                        </Col> */}
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <h6 className="heading-small text-muted mb-4">
                                            User information
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-first-name">
                                                            First name
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="Ayodeji"
                                                            id="input-first-name"
                                                            placeholder="First name"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-last-name">
                                                            Last name
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="Moshood"
                                                            id="input-last-name"
                                                            placeholder="Last name"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-email">
                                                            Email address
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-email"
                                                            placeholder="amoshood@fczmedia.com"
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username">
                                                            Current Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="lucky.jesse"
                                                            id="input-username"
                                                            placeholder="•••••"
                                                            type="password"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username">
                                                            New Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="lucky.jesse"
                                                            id="input-username"
                                                            placeholder="•••••"
                                                            type="password"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-username">
                                                            Confirm New Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="lucky.jesse"
                                                            id="input-username"
                                                            placeholder="•••••"
                                                            type="password"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <hr className="my-4" />
                                        {/* Address */}
                                        <h6 className="heading-small text-muted mb-4">
                                            Contact information
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address">
                                                            Address
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                            id="input-address"
                                                            placeholder="Home Address"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-city">
                                                            City
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="Lagos"
                                                            id="input-city"
                                                            placeholder="City"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-country">
                                                            Country
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="Nigeria"
                                                            id="input-country"
                                                            placeholder="Country"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-country">
                                                            Postal code
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue="100001"
                                                            id="input-postal-code"
                                                            placeholder="Postal code"
                                                            type="number"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="4">
                                                    <Button
                                                        color="primary"
                                                        href="#ayo"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        size="sm">
                                                        Save Changes
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <FooterSection />
            </>
        );
    }
}

export default Profile;
