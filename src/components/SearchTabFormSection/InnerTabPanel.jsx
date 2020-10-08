import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import TrainIcon from '@material-ui/icons/Train';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Col } from 'react-bootstrap';
import InnerTabContent from './InnerTabContent';
import Covid19Content from './Covid19Content';
import PriceAlertContent from './PriceAlertContent';
import TicketInnerTabContent from './TicketInnerTabContent';
// import Covid19Content from './Covid19Content'

function InnerTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

InnerTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar
                style={{
                    backgroundColor: 'transparent',
                    color: '#043f7c',
                    boxShadow: 'none',
                    borderBottom: '1px solid',
                }}
                className="colorTransparent"
                position="static">
                <Tabs
                    style={{ width: '100%' }}
                    value={value}
                    onChange={handleChange}
                    variant="fullwidth"
                    scrollButtons="off"
                    aria-label="scrollable prevent tabs example">
                    <Tab
                        style={{ width: '-webkit-fill-available' }}
                        icon={<FlightIcon />}
                        aria-label="flight"
                        {...a11yProps(0)}
                        label={
                            <React.Fragment>
                                Flight
                                <br />
                                <h6 style={{ fontSize: 'smaller' }}>
                                    NGN 282,000 • 20h55m
                                </h6>
                            </React.Fragment>
                        }
                    />
                    <Tab
                        style={{ width: '-webkit-fill-available' }}
                        icon={<DirectionsBusIcon />}
                        aria-label="bus"
                        {...a11yProps(1)}
                        label={
                            <React.Fragment>
                                Buses
                                <br />
                                <h6 style={{ fontSize: 'smaller' }}>
                                    NGN 123,999 • 120h55m
                                </h6>
                            </React.Fragment>
                        }
                    />
                    <Tab
                        style={{ width: '-webkit-fill-available' }}
                        icon={<DirectionsBoatIcon />}
                        aria-label="train"
                        {...a11yProps(2)}
                        label={
                            <React.Fragment>
                                Train
                                <br />
                                <h6 style={{ fontSize: 'smaller' }}>
                                    NGN 123,999 • 120h55m
                                </h6>
                            </React.Fragment>
                        }
                    />
                    <Tab
                        style={{ width: '-webkit-fill-available' }}
                        as={Col}
                        md="6"
                        icon={<TrainIcon />}
                        aria-label="ferries"
                        {...a11yProps(3)}
                        label="Ferries"
                        disabled
                    />
                </Tabs>
            </AppBar>
            <InnerTabPanel value={value} index={0}>
                <Covid19Content />
                <br />
                <InnerTabContent />
                <br />
                {/* <br/>
        <InnerTabContent />
        <br/>
        <InnerTabContent />
        <br/>
        <InnerTabContent />
        <br/> */}
                <PriceAlertContent />
            </InnerTabPanel>
            <InnerTabPanel value={value} index={1}>
                {/* <Covid19Content />
        <br/>
        <TicketInnerTabContent /> */}
            </InnerTabPanel>
            <InnerTabPanel value={value} index={2}>
                Item Three
            </InnerTabPanel>
            <InnerTabPanel value={value} index={3}>
                Item Four
            </InnerTabPanel>
            {/* <InnerTabPanel value={value} index={4}>
        Item Five
      </InnerTabPanel>
      <InnerTabPanel value={value} index={5}>
        Item Six
      </InnerTabPanel>
      <InnerTabPanel value={value} index={6}>
        Item Seven
      </InnerTabPanel> */}
        </div>
    );
}
