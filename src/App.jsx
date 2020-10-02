import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Router from './config/route';
// import Home from './components/Home/Home';
// import Insurance from './components/Insurance/Insurance';
// import MotorInsurance from './components/Insurance/MotorInsurance/MotorInsurance';
import CustomNavbar from './components/CustomNavbar';
// import SideNav from './components/SideNav/SideNav'
// import NoMatch from './components/NoMatch';
// import MoneyMatters from './components/MoneyMatters/MoneyMatters';
// import OnTheGo from './components/OnTheGo/OnTheGo';
// import Bus from './components/OnTheGo/Bus/Bus';
// import Ferries from './components/OnTheGo/Ferries/Ferries';
// import Train from './components/OnTheGo/Train/Train';
// import FlightSearch from './components/FlightSearch/FlightSearch';
// import FlightSearch2 from './components/FlightSearch/FlightSearch2';
// import Utilities from './components/Utilities/Utilities';
// import UtilitiesThumbnailSection from './components/UtilitiesThumbnailSection/UtilitiesThumbnailSection';
// import Airtime from './components/Utilities/Airtime/Airtime';
// import Data from './components/Utilities/Data/Data';
// import CableTv from './components/Utilities/CableTv/CableTv';
// import Electricity from './components/Utilities/Electricity/Electricity';
// import Internet from './components/Utilities/Internet/Internet';
// import AskDoc from './components/AskDoc/AskDoc';

// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
// import ForgotPassword from './components/ForgotPassword/ForgotPassword';
// import { NavbarBrand } from 'react-bootstrap';



function App() {
    return (
        <div>
            {/* <CustomNavbar /> */}
            <Router />
        </div>
    );
}

export default App;
