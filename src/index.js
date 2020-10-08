import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Index from '../src/admin/index'
// import CustomNavbar from './components/CustomNavbar';
import * as serviceWorker from './serviceWorker';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'


// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Index /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
