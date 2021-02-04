import React from 'react';

import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { columnStyle, logoStyle } from './Styles.js';

import dulaya from '../Images/dulaya.jpg';
import JSlogo from '../Images/JS-logo.png';
import Reactlogo from '../Images/React-logo.svg';
import Reduxlogo from '../Images/Redux-logo.png';
import Nodelogo from '../Images/Node-logo.png';
import Pythonlogo from '../Images/Python-logo.png';
import Djangologo from '../Images/Django-logo.png';
import PHPlogo from '../Images/PHP-logo.png';
import MySQLlogo from '../Images/MySQL-logo.png';
import Gitlogo from '../Images/Git-logo.png';
import HTMLlogo from '../Images/HTML-logo.png';
import CSSlogo from '../Images/CSS-logo.png';
import SQLlogo from '../Images/SQL-logo.png';

const Home = () => {

    return (
        <>
                <Container>
                    <Container horizontal='true' style={{ textAlign: 'center', margin: 'auto', }}>

                        <Card style={{ margin: '5px', padding: '10px', textAlign: 'left', }}>
                            <Media>
                                <Image className="mr-3"
                                    variant="top" src={dulaya} roundedCircle style={{ width: '125px', }} />
                                <Media.Body>
                                    <Card.Title>Dulaya Saennok</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
                                    <Card.Text >
                                        Well-rounded engineer specializing in front end development.
                                        Currently working on open source math education projects.
                                        Professional experience in mechanical engineering and patent research.
                            </Card.Text>
                                </Media.Body>
                            </Media>
                        </Card>
                    </Container>

                    <Container horizontal='true' style={{ textAlign: 'center', margin: 'auto', }}>

                        <Row>
                            <Col>
                                <Card style={{ margin: '5px', padding: '10px', textAlign: 'center', }}>
                                    <Card.Title>My Skills</Card.Title>
                                </Card>
                            </Col>
                        </Row>

                        <Row style={{ float: 'center' }}>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={JSlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    JavaScript
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={Reactlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    React
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={Reduxlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Redux
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={Nodelogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Node.js
                        </ListGroup.Item>
                            </Col>
                        </Row>
                        <Row style={{ float: 'center' }}>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={Pythonlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Python
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={Djangologo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Django
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={PHPlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    PHP
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={MySQLlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    MySQL
                        </ListGroup.Item>
                            </Col>
                        </Row>
                        <Row style={{ float: 'center' }}>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={Gitlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Git
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={HTMLlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    HTML
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={CSSlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    CSS
                        </ListGroup.Item>
                            </Col>
                            <Col style={columnStyle}>
                                <ListGroup.Item>
                                    <Image src={SQLlogo} rounded style={logoStyle} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    SQL
                        </ListGroup.Item>
                            </Col>
                        </Row>
                    </Container>

                </Container>

        </>

    );
}

export default Home;