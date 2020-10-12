import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store.js';

import PrivateRoute from '../components/Common/PrivateRoute';
import AuthLayout from '../components/Common/AuthLayout';

import Home from '../components/Home/Home';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Insurance from '../components/Insurance/Insurance';
import MotorInsurance from '../components/Insurance/MotorInsurance/MotorInsurance';
import NoMatch from '../components/NoMatch';
import MoneyMatters from '../components/MoneyMatters/MoneyMatters';
import OnTheGo from '../components/OnTheGo/OnTheGo';
import Bus from '../components/OnTheGo/Bus/Bus';
import Ferries from '../components/OnTheGo/Ferries/Ferries';
import Train from '../components/OnTheGo/Train/Train';
import FlightSearch from '../components/FlightSearch/FlightSearch';
import FlightSearch2 from '../components/FlightSearch/FlightSearch2';
import InsuranceFlightSearch from '../components/FlightSearch/InsuranceFlightSearch';
import Utilities from '../components/Utilities/Utilities';
import UtilitiesThumbnailSection from '../components/UtilitiesThumbnailSection/UtilitiesThumbnailSection';
import Airtime from '../components/Utilities/Airtime/Airtime';
import Data from '../components/Utilities/Data/Data';
import CableTv from '../components/Utilities/CableTv/CableTv';
import Electricity from '../components/Utilities/Electricity/Electricity';
import Internet from '../components/Utilities/Internet/Internet';
import AskDoc from '../components/AskDoc/AskDoc';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import Profile from '../components/Profile/Profile';
import Verification from '../components/Verification/Verification';
import Orders from '../components/Orders/Orders.jsx';
import Favorites from '../components/Favorites/Favorites.jsx';
import ChangePassword from '../components/ChangePassword/ChangePassword.jsx';
import PaymentMethods from '../components/PaymentMethods/PaymentMethods.jsx';
import ContactPreferences from '../components/ContactPreferences/ContactPreferences.jsx';
import SocialAccounts from '../components/SocialAccounts/SocialAccounts.jsx';

export default function RouterComponent() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    getState={(state) => state.toastr} // This is the default
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick
                />
                <Router>
                    <Switch>
                        <AuthLayout path="/signin" component={SignIn} />
                        <AuthLayout path="/signup" component={SignUp} />
                        <AuthLayout
                            path="/resetpassword"
                            component={ResetPassword}
                        />
                        <AuthLayout
                            path="/verification"
                            component={Verification}
                        />
                        <AuthLayout
                            path="/myaccount/profile"
                            component={Profile}
                        />
                        <AuthLayout
                            path="/myaccount/orders"
                            component={Orders}
                        />
                        <AuthLayout
                            path="/myaccount/favorites"
                            component={Favorites}
                        />
                        <AuthLayout
                            path="/myaccount/changepassword"
                            component={ChangePassword}
                        />
                        <AuthLayout
                            path="/myaccount/paymentmethods"
                            component={PaymentMethods}
                        />
                        <AuthLayout
                            path="/myaccount/contactpreferences"
                            component={ContactPreferences}
                        />
                        <AuthLayout
                            path="/myaccount/socialaccounts"
                            component={SocialAccounts}
                        />

                        <AuthLayout exact={true} path="/" component={Home} />

                        <AuthLayout
                            exact
                            path="/moneymatters"
                            component={MoneyMatters}
                        />
                        <AuthLayout
                            exact
                            path="/moneymatters/insurance"
                            component={Insurance}
                        />
                        <AuthLayout
                            exact
                            path="/moneymatters/insurance/motorinsurance"
                            component={MotorInsurance}
                        />
                        <AuthLayout exact path="/onthego" component={OnTheGo} />
                        <AuthLayout exact path="/onthego/bus" component={Bus} />
                        <AuthLayout
                            exact
                            path="/onthego/ferries"
                            component={Ferries}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/train"
                            component={Train}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/flightsearch"
                            component={FlightSearch}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/flightsearch2"
                            component={FlightSearch2}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/flightsearch/insurance"
                            component={InsuranceFlightSearch}
                        />
                        <AuthLayout
                            exact
                            path="/utilities"
                            component={Utilities}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/airtime"
                            component={Airtime}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/data"
                            component={Data}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/cabletv"
                            component={CableTv}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/electricity"
                            component={Electricity}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/internet"
                            component={Internet}
                        />
                        <AuthLayout exact path="/askdoc" component={AskDoc} />
                        <AuthLayout path="/nomatch" component={NoMatch} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}
