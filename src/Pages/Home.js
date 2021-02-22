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
import Mongologo from '../Images/Mongo-logo.png';
import Pythonlogo from '../Images/Python-logo.png';
import Djangologo from '../Images/Django-logo.png';
import PHPlogo from '../Images/PHP-logo.png';
import MySQLlogo from '../Images/MySQL-logo.png';
import Gatsbylogo from '../Images/Gatsby-logo.png';
import Gitlogo from '../Images/Git-logo.png';
import HTMLlogo from '../Images/HTML-logo.png';
import CSSlogo from '../Images/CSS-logo.png';
import SQLlogo from '../Images/SQL-logo.png';
import JWTlogo from '../Images/JWT-logo.svg';
import Engineeringlogo from '../Images/Engineering-logo.png';
import Patentlogo from '../Images/Patent-logo.png';
import Monitorlogo from '../Images/Monitor-logo.jpg';

const Home = () => {

    return (
        <>
            <Container>
                <Container horizontal='true' style={{ textAlign: 'center', margin: 'auto', }}>

                    <Card style={{
                        margin: '5px', padding: '10px', textAlign: 'left',
                    }}>
                        <Media>
                            <Col style={{ maxWidth: '175px', textAlign: 'center' }}>
                                <Image className="mr-3" variant="top" src={dulaya} roundedCircle style={{ width: '150px', }} />
                                <Card.Title style={{ width: '150px', }}>Dulaya Saennok</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{ width: '150px', }}>Software Developer</Card.Subtitle>
                            </Col>
                            <Media.Body>
                                <Card.Text >
                                    I am a self-taught software developer with a Bachelor's degree in mechanical engineering and a professional experience in patent research.
                                    Currently I am working on opensource math education projects using React and another app with a small team of developers from diverse backgrounds.
                                    I am a lifelong learner, and I use what I learned to build tools that solve problems for me or others (e.g. learning apps).
                                    I also enjoy teaching basic programming to people that just learn to code.
                                    My skills include JavaScript, React, Redux, Node.js, Express, Python, Django, PHP and MySQL.
                                    I am looking for a React developer role, and I am a US citizen.
                            </Card.Text>
                            </Media.Body>
                        </Media>
                    </Card>
                </Container>

                <Container horizontal='true' style={{ textAlign: 'center', margin: 'auto', }}>

                    <Row>
                        <Col>
                            <Card style={{
                                color: 'white',
                                margin: '5px', padding: '10px', textAlign: 'center',
                                backgroundImage: `linear-gradient( 111.5deg, rgba(20,100,196,1) 0.4%, rgba(33,152,214,1) 100.2% )`
                            }}>
                                <Card.Title >My Skills</Card.Title>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ float: 'center', }}>
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
                        <Col style={columnStyle}>
                            <ListGroup.Item>
                                <Image src={Mongologo} rounded style={logoStyle} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                MongoDB
                        </ListGroup.Item>
                        </Col>
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
                    </Row>
                    <Row style={{ float: 'center' }}>
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
                        <Col style={columnStyle}>
                            <ListGroup.Item>
                                <Image src={JWTlogo} rounded style={logoStyle} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                JWT
                        </ListGroup.Item>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <Card style={{
                                color: 'white',
                                margin: '5px', padding: '10px', textAlign: 'center',
                                backgroundImage: `linear-gradient( 111.5deg, rgba(20,100,196,1) 0.4%, rgba(33,152,214,1) 100.2% )`
                            }}>
                                <Card.Title >Education & Experience</Card.Title>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ float: 'center', }}>
                        <Col style={columnStyle}>
                            <ListGroup.Item>
                                <Image src={Engineeringlogo} rounded style={{ maxHeight: '200px' }} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Bsc in Mechanical Engineering</p>

                                <p>University of Nevada, Las Vegas</p>

                                <p>Class of 2015</p>
                            </ListGroup.Item>
                        </Col>
                        <Col style={columnStyle}>
                            <ListGroup.Item>
                                <Image src={Patentlogo} rounded style={{ maxHeight: '200px' }} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Professional experience in patent research and analysis.</p>
                                <p>Sept. 2015 - Jan. 2019</p>
                            </ListGroup.Item>
                        </Col>
                        <Col style={columnStyle}>
                            <ListGroup.Item>
                                <Image src={Monitorlogo} rounded style={{ maxHeight: '200px' }} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Self-Taught Software Developer focusing on JavaScript ecosystem.</p>
                                <p>Jan. 2019 - Present</p>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                </Container>

            </Container>

        </>

    );
}

export default Home;