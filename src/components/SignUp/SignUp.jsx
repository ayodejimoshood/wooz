import React, { Component, useState, select, Switch } from 'react';
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {registerUser} from '../../actions/account'
import {createMessage} from '../../actions/messages'
import {
    Button,
    Row,
    Card,
    CardHeader,
    CardBody,
    Container,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
} from 'reactstrap';
import * as Formik from 'formik';
import axios from '../../config/axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import FooterSection from '../FooterSection/FooterSection';

const SignupSchema = Yup.object().shape({});

export class SignUp extends Component {
    // const [validated, setValidated] = useState(false);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [accountType, setAccountType] = useState('staff');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [attributes, setAttributes] = useState({ company: 'Google' });

    state ={
        firstName: '',
        phone: '',
        // accountType: '', 
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    
      onSubmit = e => {
        e.preventDefault();
        const {
            firstName,
            phone,
            // accountType,
            lastName,
            email,
            password,
            confirmPassword,
        } = this.state;

        if(password !== confirmPassword ) {
          alert('Password do not match')
        }else {
          const newUser = {
            firstName,
            phone,
            accountType: 'customer',
            lastName,
            email,
            password,
          }
          this.props.registerUser(newUser)
          console.log(newUser, 'newUser')
        }
      }

      static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
      }

      onChange = e => this.setState({ 
        [e.target.name]: e.target.value
        
      })

    
    render (){

        const {
            firstName,
            phone,
            accountType,
            lastName,
            email,
            password,
            confirmPassword,
            attributes
        } = this.state;

    return (
        <div style={{ backgroundColorx: '#043f7c', backgroundSize: 'cover' }}>
            <Container
                className=""
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                    height: '70vh',
                    width: '150vh',
                    // backgroundColor: '#043f7c',
                    // backgroundSize: 'cover',
                    maxWidth: '100%',
                    maxWidth: '100%',
                }}>
                <Col lg="4" md="7">
                    <Card className="bg-light shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                <small
                                    style={{
                                        color: '#000000',
                                        fontSize: '15px',
                                    }}>
                                    Sign up with credentials
                                </small>
                            </div>
                            <Form role="form" onSubmit={this.onSubmit}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-hat-3" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="firstName"
                                            onChange={this.onChange}
                                            value={firstName}
                                            required
                                            placeholder="Firstname"
                                            type="text"
                                            // autoComplete="new-email"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-hat-3" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="lastName"
                                            onChange={this.onChange}
                                            value={lastName}
                                            
                                            required
                                            placeholder="Lastname"
                                            type="text"
                                            // autoComplete="new-email"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="email"
                                            onChange={this.onChange}
                                            value={email}
                                        
                                            required
                                            placeholder="Email"
                                            type="email"
                                            autoComplete="new-email"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-phone" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="phone"
                                            onChange={this.onChange}
                                            value={phone}
                                            
                                            required
                                            placeholder="Phone"
                                            type="phone"
                                            autoComplete="phone"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="password"
                                            onChange={this.onChange}
                                            value={password}
                                            required
                                            placeholder="Password"
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="confirmPassword"
                                            onChange={this.onChange}
                                            value={confirmPassword}
                                            required
                                            placeholder="Confirm Password"
                                            type="password"
                                            autoComplete="new-password"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                {/* <hr className="text-center" style={{width: '100%', margin: '0 auto'}} /> */}
                                <div className="text-center">
                                    <Button
                                        style={{
                                            backgroundColor: '#ff5757',
                                            width: '100%',
                                        }}
                                        // onClick={this.handleLogin}
                                        type="submit"
                                        className="my-4"
                                        color="danger"
                                        >
                                        Sign up
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        {/* <Col xs="6">
                                <a
                                    className="text-light"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}>
                                    <small style={{color: '#043f7c'}}>Forgot password?</small>
                                </a>
                            </Col> */}
                        <Col classNamex="text-right" xs="6">
                            <a
                                className="text-light"
                                href="/signin"
                                // onClick={(e) => e.preventDefault()}
                            >
                                <small style={{ color: '#043f7c' }}>
                                    Have an account? <b>signin</b>{' '}
                                </small>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Container>
            <FooterSection />
        </div>
    );
}
}

const mapStateToProps = state => ({
    isAuthenticated: state.account.isAuthenticated
  }); 
  
  
export default connect(mapStateToProps, { registerUser, createMessage})(SignUp)
  
