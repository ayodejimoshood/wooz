import React, { Component, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {toastr} from 'react-redux-toastr'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logout, logOut } from '../actions/auth'

import {
    Badge,
    Navbar,
    Nav,
    NavItem,
    mouseEvent,
    NavDropdown,
    Container,
    InputGroup,
    Dropdown,
    DropdownButton,
    Button,
    FormControl,
    Image,
} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Icon from '@material-ui/icons';
// import { Icon } from '@material-ui/core';

import Logo from '../assets/img/woozeee.png';
import img from '../assets/img/avatar.jpg';
import ReactCountryFlag from 'react-country-flag';
// import DropdownMenu from "./DropdownMenu/DropdownMenu";
import DropdownMenuComp from './DropdownMenu/DropdownMenu';
// import MobileNavbarMenu from './DropdownMenu/MobileMenu'
import './SideNav/SideNav.css';
import SideNav from './SideNav/SideNav';

// import { reactLocalStorage } from 'reactjs-localstorage';



const CustomNavbar = (props, isAuthenticated) => {
  const history = useHistory()

  const handleSignOut = () => {
    history.push('/')
    props.logoutUser();
    toastr.success('Sign out Successful', '', {
      timeOut: 5000,
      showCloseButton: true, 
    })
  }
  

    // static propTypes = {
    //   auth: PropTypes.object.isRequired,
    //   logout: PropTypes.func.isRequired
    // };
    const [display, setDisplay] = useState(false)
    const userInfo = props.auth.user
    const [isTrue, setisTrue] = useState(false)


    const toggle = ()  => {
        setisTrue(!isTrue)
    }



    // const { isAuthenticated,user } = props.auth;

        return (
            // <Container className='' style={{ maxWidth: '100%'}}>
            <Navbar
                style={{ backgroundColor: 'white' }}
                expand="lg"
                sticky="top">
                {/* start menu icon */}
                {/* <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}> */}
                {/* web dropdownmenu */}
                <Nav.Link
                    className="d-none d-lg-block"
                    onClick={() => toggle()}
                    style={{
                        backgroundColor: '#043f7c',
                        borderRadius: '3px',
                        paddingLeft: '12px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        paddingRight: '12px',
                    }}>
                    <i
                        style={{ color: '#ffffff' }}
                        className="fa fa-bars fa-lg"></i>
                </Nav.Link>
                {/* end web dropdownmenu */}

                {/* mobile dropdownmenu */}
                {/* <Nav.Link className='d-lg-none' onClick={() => this.toggle()} style={{backgroundColor: '#043f7c', borderRadius: '3px', paddingLeft: '13px', paddingRight: '13px'}} >
                            <i style={{color: '#ffffff'}} className="fa fa-bars fa-lg"></i>
                        </Nav.Link> */}
                {/* end mobile dropdownmenu */}
                <Navbar style={{ padding: '2px' }} className="d-lg-none">
                    <SideNav />
                </Navbar>

                {/* </ClickAwayListener> */}
                {/* end menu icon */}

                {/* start brand logo */}
                {/* <Navbar.Brand className="ml-3">
                    <a href="/">
                        <img src={Logo} style={{ width: '170px' }} alt="" />
                    </a>
                </Navbar.Brand> */}
                <navbarbrand className="ml-3">
                    <a href="/">
                        <img src={Logo} style={{ width: '170px' }} alt="" />
                    </a>
                </navbarbrand>
                {/* end brand logo */}

                {/* start responsive navbar */}
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}

                        {/* start search field */}
                        <InputGroup className="" style={{ width: '650px' }}>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-primary"
                                title="All"
                                id="input-group-dropdown-1">
                                <Dropdown.Item href="#">
                                    All Departments
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Arts &amp; Crafts
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Hangouts</Dropdown.Item>
                                <Dropdown.Item href="#">Learning</Dropdown.Item>
                                <Dropdown.Item href="#">Worship</Dropdown.Item>
                                <Dropdown.Item href="#">Charity</Dropdown.Item>
                                <Dropdown.Item href="#">Hangouts</Dropdown.Item>
                                <Dropdown.Item href="#">Learning</Dropdown.Item>
                                <Dropdown.Item href="#">Worship</Dropdown.Item>
                                <Dropdown.Item href="#">Charity</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">
                                    Other Services
                                </Dropdown.Item>
                            </DropdownButton>
                            <FormControl
                                placeholder="    What are you looking for?"
                                aria-describedby="basic-addon1"></FormControl>
                            <InputGroup.Append>
                                <Button variant="danger">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {/* end search field */}
                    </Nav>
                    <Nav>
                        {/* start currency */}
                        {/* <NavDropdown
                            className="d-md-block"
                            title="NGN &#x20A6;"
                            id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                USD $
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                EUR £
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                GBP £
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        {/* end currency */}

                        {/*  */}
                        {/* <Nav.Link>
                                
                            </Nav.Link> */}
                        <Dropdown alignRight>
                            <Dropdown.Toggle
                                variant="transparent"
                                id="dropdown-basic">
                                <ReactCountryFlag
                                    id="collasible-nav-dropdown"
                                    countryCode="Ng"
                                    svg
                                    style={{
                                        width: '2em',
                                        height: '1em',
                                    }}
                                    title="Ng"></ReactCountryFlag>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-3">
                                    {' '}
                                    <i className="fa fa-credit-card"></i> GH
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    {' '}
                                    <i className="fa fa-shopping-bag"></i> USA
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    {' '}
                                    <i className="fa fa-exchange"></i> UK
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    {' '}
                                    <i className="fa fa-question-circle"></i> SA
                                </Dropdown.Item>
                                <Dropdown.Divider />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Nav.Link href="#">
                        <i
                            className="fa fa-shopping-cart fa-lg"
                            style={{ color: '#043f7c' }}></i>
                        <Badge variant="danger">3</Badge>

                        {/* <Button color="primary" type="button"> */}
                        {/* <span>Notifications</span> */}
                        
                    

                    {/* {!this.state.isLoggedIn && ( */}
                        
                    </Nav.Link>
                    {!userInfo ? (
                        <Nav>
                            <Nav.Link eventKey={2} href="/signin">
                                <Button
                                    onClick="window.location.href='/signin'"
                                    stylexx={{ backgroundColor: '#ff5757' }}
                                    variant="outline-danger"
                                    type="submit">
                                    Login
                                </Button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/signup">
                                <Button
                                    onClick="window.location.href='/signup'"
                                    style={{
                                        backgroundColor: '#043f7c',
                                        borderColor: '#043f7c',
                                    }}
                                    variantxx="primary">
                                    Sign Up
                                </Button>{' '}
                            </Nav.Link>
                        </Nav>
                    ) : ""}

                    {userInfo ? (
                        <>
                            <Nav.Link style={{ color: '#043f7c' }} eventKey={2}>
                            {userInfo ? `Hello ${userInfo.firstName}` : ''}
                            </Nav.Link>
                            <Dropdown alignRight>
                                <Dropdown.Toggle
                                    variant="transparent"
                                    id="dropdown-basic">
                                    <Image
                                        src={img}
                                        style={{ width: '30px' }}
                                        roundedCircle
                                    />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="profile">
                                        {' '}
                                        <i className="fa fa-user"></i> Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <i className="fa fa-shopping-bag"></i>{' '}
                                        Track Orders
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        {' '}
                                        <i className="fa fa-exchange"></i>{' '}
                                        Reorder items
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        {' '}
                                        <i className="fa fa-credit-card"></i>{' '}
                                        Voucher Credit
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        {' '}
                                        <i className="fa fa-question-circle"></i>{' '}
                                        Help
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        onClick={handleSignOut}>
                                        {' '}
                                        <i className="fa fa-power-off"></i>{' '}
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    ) : ""}
                </Navbar.Collapse>
                {isTrue ? <DropdownMenuComp /> : null}
            </Navbar>
            // </Container>

            // <div>
            //     tfuygihoj;
            // </div>
        );
    }


const mapStateToProps = ({ auth }) => ({
    auth
}); 

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logOut())
})
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)
  