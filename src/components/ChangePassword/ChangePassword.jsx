import React, { Component } from 'react';
import { connect } from 'react-redux';

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
import './ChangePassword.css';

class ChangePassword extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
    };
    uploadedImage = React.createRef(null);
    imageUploader = React.createRef(null);

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        console.log('clicked');
        const {
            firstName,
            lastName,
            email,
            currentPassword,
            newPassword,
            confirmPassword,
            address,
            city,
            country,
            postalCode,
        } = this.state;

        if (newPassword !== confirmPassword) {
            alert('New Passwords do not match');
            return;
        }
    };

    handleImageUpload = (e) => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = this.uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    render() {
        const { firstName, lastName, email } = this.props;
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
                                <CardBody className="pt-0 pt-md-4">
                                    <div className="text-left">
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/profile">My Profile</a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/orders">
                                                My Orders
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/favorites">
                                                My Saved/Favorite Items
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-600">
                                            <a href="/myaccount/changepassword">
                                                Change Password
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/paymentmethods">
                                                Payment Methods
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/contactpreferences">
                                                Contact Preferences
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/socialaccount">
                                                Social Accounts
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-light shadow">
                                <CardHeader className="bg-secondary border-0">
                                    <Row className="align-items-center">
                                        <Col xs="12">
                                            <h5 className="mb-0">
                                                Change Password
                                            </h5>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <input
                                            type="hidden"
                                            value="this is here to stop chrome from autocompleting the form"
                                        />
                                        <h6 className="heading-small text-muted mb-4">
                                            Feel free to update your password so
                                            your woozeee account stays secure.
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-first-name">
                                                            Current Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-first-name"
                                                            placeholder="password"
                                                            type="password"
                                                            value={firstName}
                                                            name="firstName"
                                                            onChange={(e) =>
                                                                this.handleChange(
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-last-name">
                                                            New Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-last-name"
                                                            placeholder="password"
                                                            type="password"
                                                            value={lastName}
                                                            name="lastName"
                                                            onChange={(e) =>
                                                                this.handleChange(
                                                                    e,
                                                                )
                                                            }
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
                                                            Confirm New Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-email"
                                                            placeholder="password"
                                                            type="password"
                                                            name="lastName"
                                                            value={lastName}
                                                            onChange={(e) =>
                                                                this.handleChange(
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="4">
                                                    <Button
                                                        color="primary"
                                                        href="#ayo"
                                                        size="sm"
                                                        onClick={
                                                            this.handleSubmit
                                                        }>
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

const mapStateToProps = ({ auth }) => {
    const {
        user: { firstName, lastName },
        email,
    } = auth;

    return {
        firstName,
        lastName,
        email,
    };
};

export default connect(mapStateToProps)(ChangePassword);
