import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button,
    Card,
    CardDeck,
} from 'react-bootstrap';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import cabinbagimg from '../../assets/img/icons/cabinbag.png';
import infoimg from '../../assets/img/icons/info.png';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png';
import './ButtonCard.css';
import cardimg from '../../assets/img/cardimg/1.jpg';
import cardimg2 from '../../assets/img/cardimg/2.jpg';
import LikeButton from '../LikeButton/LikeButton';
import clickandshop from '../../assets/img/icons/home/click-shop-w.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        // border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
    },
    divider: {
        margin: theme.spacing(1, 0.5),
    },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

export default function CustomizedDividers() {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const classes = useStyles();

    const [selected, setSelected] = React.useState(false);

    const styles = {
        center: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    };

    return (
        <Card as={Col} md={12}>
            <div style={{ backgroundColor: '#ffffff', paddingxx: '20px' }}>
                <Row
                    style={{
                        paddingxx: '20px',
                        marginBottom: '10px',
                        marginTop: '20px',
                        marginLeft: '0px',
                        marginRight: '0px',
                    }}>
                    <Col md="11" style={{ marginTop: '8px' }}>
                        <p style={{ color: '#043f7c' }}>
                            {' '}
                            <b>Class &amp; Fare</b>{' '}
                        </p>
                    </Col>
                    <Col md="1">
                        <Image
                            style={{
                                backgroundColor: 'white',
                                boxShadow: '0px 0px 5px 0px #ccc',
                            }}
                            width="40px"
                            src={airpeaceimg}
                            alt=""
                            roundedCircle
                        />
                    </Col>
                </Row>
                <hr className="mb-4" style={{ color: '#043f7c' }} />
                {/* <Row>
                    <Col md='12' stylex={{marginTop: '8px'}}> */}

                <Paper elevation={0} className={classes.paper}>
                    <StyledToggleButtonGroup
                        as={Col}
                        md={12}
                        size="small"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment">
                        {/* <Col md={12}> */}
                        {/* <Col> */}

                        {/* <Row stylexx={{marginLeft: "auto", marginRight: "auto"}} className='mx-auto mb-4'> */}
                        <Col lg={12}>
                            <CardDeck>
                                <Card
                                    classNamexx="text-left"
                                    style={{
                                        widthxx: '305px',
                                        heightxx: '330px',
                                        textTransform: 'none',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}>
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            borderRadius: '10px',
                                        }}>
                                        <Card.Body
                                            style={{ textAlign: 'left' }}>
                                            <Card.Title
                                                style={{ color: '#000000' }}>
                                                First Class
                                            </Card.Title>
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={cabinbagimg}
                                                    alt=""
                                                />{' '}
                                                Cabin Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Checked Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Semi Refundable
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Seat Selection
                                            </span>
                                            <br />
                                            <br />
                                            <br />
                                            <h4 style={{ color: '#000000' }}>
                                                {' '}
                                                &#8358;561,083{' '}
                                            </h4>
                                        </Card.Body>
                                    </ToggleButton>
                                </Card>
                                <Card
                                    classNamexx="text-left"
                                    style={{
                                        widthxx: '305px',
                                        heightxx: '330px',
                                        textTransform: 'none',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}>
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            borderRadius: '10px',
                                        }}>
                                        <Card.Body
                                            style={{ textAlign: 'left' }}>
                                            <Card.Title
                                                style={{ color: '#000000' }}>
                                                Business
                                            </Card.Title>
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={cabinbagimg}
                                                    alt=""
                                                />{' '}
                                                Cabin Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Checked Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Semi Refundable
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Seat Selection
                                            </span>
                                            <br />
                                            <br />
                                            <br />
                                            <h4 style={{ color: '#000000' }}>
                                                {' '}
                                                &#8358;285,940{' '}
                                            </h4>
                                        </Card.Body>
                                    </ToggleButton>
                                </Card>
                                <Card
                                    classNamexx="text-left"
                                    style={{
                                        widthxx: '305px',
                                        heightxx: '330px',
                                        textTransform: 'none',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}>
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            borderRadius: '10px',
                                        }}>
                                        <Card.Body
                                            style={{ textAlign: 'left' }}>
                                            <Card.Title
                                                style={{ color: '#000000' }}>
                                                Economy
                                            </Card.Title>
                                            <br />
                                            <span
                                                style={{ color: '#000000' }}
                                                className="mb-4">
                                                {' '}
                                                <Image
                                                    src={cabinbagimg}
                                                    alt=""
                                                />{' '}
                                                Cabin Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span
                                                style={{ color: '#000000' }}
                                                className="mb-4">
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Non Refundable
                                            </span>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                            <h4 style={{ color: '#000000' }}>
                                                {' '}
                                                &#8358;199,145{' '}
                                            </h4>
                                        </Card.Body>
                                    </ToggleButton>
                                </Card>
                            </CardDeck>
                            <CardDeck>
                                {/* <Col md={4} className='mb-4'> */}
                                {/* <ToggleButton classNamex='ml-4' value="first" aria-label="first aligned" style={{border: '1px solid rgba(0, 0, 0, 0.38)', width: '100%', borderRadius: '10px'}}>
                                                <Card as={Col} md={12} className="text-left" style={{widthx: '100%', heightx: '50%', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}> */}

                                <Card
                                    classNamexx="d-none d-lg-block"
                                    style={{
                                        display: 'none',
                                        widthxx: '305px',
                                        heightxx: '330px',
                                        textTransform: 'none',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}>
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            borderRadius: '10px',
                                        }}>
                                        <Card.Body>
                                            <Card.Title
                                                style={{ color: '#000000' }}>
                                                First Class
                                            </Card.Title>
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={cabinbagimg}
                                                    alt=""
                                                />{' '}
                                                Cabin Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Checked Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Semi Refundable
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Seat Selection
                                            </span>
                                            <br />
                                            <br />
                                            <br />
                                            <h4 style={{ color: '#000000' }}>
                                                {' '}
                                                &#8358;561,083{' '}
                                            </h4>
                                        </Card.Body>
                                    </ToggleButton>
                                </Card>
                                <Card
                                    classNamexx="d-none d-lg-block"
                                    as={Col}
                                    md={12}
                                    className="text-left"
                                    style={{
                                        display: 'none',
                                        widthxx: '305px',
                                        heightxx: '330px',
                                        textTransform: 'none',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}>
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            borderRadius: '10px',
                                        }}>
                                        <Card.Body>
                                            <Card.Title
                                                style={{ color: '#000000' }}>
                                                First Class
                                            </Card.Title>
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={cabinbagimg}
                                                    alt=""
                                                />{' '}
                                                Cabin Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Checked Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Semi Refundable
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Seat Selection
                                            </span>
                                            <br />
                                            <br />
                                            <br />
                                            <h4 style={{ color: '#000000' }}>
                                                {' '}
                                                &#8358;561,083{' '}
                                            </h4>
                                        </Card.Body>
                                    </ToggleButton>
                                </Card>
                                <Card
                                    classNamex="d-none d-lg-block"
                                    as={Col}
                                    md={12}
                                    className="text-left"
                                    style={{
                                        display: 'none',
                                        widthxx: '305px',
                                        heightxx: '330px',
                                        textTransform: 'none',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}>
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            borderRadius: '10px',
                                        }}>
                                        <Card.Body>
                                            <Card.Title
                                                style={{ color: '#000000' }}>
                                                First Class
                                            </Card.Title>
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={cabinbagimg}
                                                    alt=""
                                                />{' '}
                                                Cabin Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Checked Bag
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Semi Refundable
                                            </span>
                                            <br />
                                            <br />
                                            <span style={{ color: '#000000' }}>
                                                {' '}
                                                <Image
                                                    src={infoimg}
                                                    alt=""
                                                />{' '}
                                                Seat Selection
                                            </span>
                                            <br />
                                            <br />
                                            <br />
                                            <h4 style={{ color: '#000000' }}>
                                                {' '}
                                                &#8358;561,083{' '}
                                            </h4>
                                        </Card.Body>
                                    </ToggleButton>
                                </Card>

                                {/* </Col> */}
                                <Col md={4} className="mb-4">
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        classNamex="ml-4"
                                        value="business"
                                        aria-label="business"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            widthxx: '100%',
                                            borderRadius: '10px',
                                        }}>
                                        <Card
                                            as={Col}
                                            md={12}
                                            className="text-left"
                                            style={{
                                                width: '305px',
                                                heightx: '50%',
                                                textTransform: 'none',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                            }}>
                                            <Card.Body>
                                                <Card.Title
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    Business
                                                </Card.Title>
                                                <br />
                                                <span
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    {' '}
                                                    <Image
                                                        src={cabinbagimg}
                                                        alt=""
                                                    />{' '}
                                                    Cabin Bag
                                                </span>
                                                <br />
                                                <br />
                                                <span
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    {' '}
                                                    <Image
                                                        src={infoimg}
                                                        alt=""
                                                    />{' '}
                                                    Checked Bag
                                                </span>
                                                <br />
                                                <br />
                                                <span
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    {' '}
                                                    <Image
                                                        src={infoimg}
                                                        alt=""
                                                    />{' '}
                                                    Semi Refundable
                                                </span>
                                                <br />
                                                <br />
                                                <span
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    {' '}
                                                    <Image
                                                        src={infoimg}
                                                        alt=""
                                                    />{' '}
                                                    Seat Selection
                                                </span>
                                                <br />
                                                <br />
                                                <br />
                                                <h4
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    {' '}
                                                    &#8358;285,940{' '}
                                                </h4>
                                            </Card.Body>
                                        </Card>
                                    </ToggleButton>
                                </Col>

                                <Col md={4} classNamexx="mb-4">
                                    <ToggleButton
                                        selected={selected}
                                        onChange={() => {
                                            setSelected(!selected);
                                        }}
                                        className=""
                                        value="economy"
                                        aria-label="economy aligned"
                                        style={{
                                            border:
                                                '1px solid rgba(0, 0, 0, 0.38)',
                                            widthxx: '100%',
                                            borderRadius: '10px',
                                        }}>
                                        <Card
                                            as={Col}
                                            md={12}
                                            className="text-left"
                                            style={{
                                                width: '305px',
                                                heightx: '50%',
                                                textTransform: 'none',
                                                textAlign: 'left',
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                            }}>
                                            <Card.Body>
                                                <Card.Title
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    Economy
                                                </Card.Title>
                                                <br />
                                                <span
                                                    style={{ color: '#000000' }}
                                                    className="mb-4">
                                                    {' '}
                                                    <Image
                                                        src={cabinbagimg}
                                                        alt=""
                                                    />{' '}
                                                    Cabin Bag
                                                </span>
                                                <br />
                                                <br />
                                                <span
                                                    style={{ color: '#000000' }}
                                                    className="mb-4">
                                                    {' '}
                                                    <Image
                                                        src={infoimg}
                                                        alt=""
                                                    />{' '}
                                                    Non Refundable
                                                </span>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />

                                                <h4
                                                    style={{
                                                        color: '#000000',
                                                    }}>
                                                    {' '}
                                                    &#8358;199,145{' '}
                                                </h4>
                                            </Card.Body>
                                        </Card>
                                    </ToggleButton>
                                </Col>
                            </CardDeck>
                            {/* </Row> */}
                        </Col>
                        {/* </Col> */}
                    </StyledToggleButtonGroup>
                </Paper>
                {/* </Col>
                </Row> */}
            </div>
        </Card>
    );
}
