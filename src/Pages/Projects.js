import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { columnStyle, logoStyleSmall } from './Styles.js';

import YourTubePlaylist1 from '../Images/YourTube-Playlist-1.png';
import YourTubePlaylist2 from '../Images/YourTube-Playlist-2.png';
import YourTubePlaylist3 from '../Images/YourTube-Playlist-3.png';
import MathChat1 from '../Images/MathChat-1.png';
import MathChat2 from '../Images/MathChat-2.png';
import MathChat3 from '../Images/MathChat-3.png';
import OneStopMath1 from '../Images/OneStopMath-1.png';
import OneStopMath2 from '../Images/OneStopMath-2.png';
import OneStopMath3 from '../Images/OneStopMath-3.png';
import VideoPoker1 from '../Images/VideoPoker-1.png';
import VideoPoker2 from '../Images/VideoPoker-2.png';
import PythonHelper1 from '../Images/PythonHelper-1.png';
import PythonHelper2 from '../Images/PythonHelper-2.png';

import JSlogo from '../Images/JS-logo.png';
import Reactlogo from '../Images/React-logo.svg';
import Nodelogo from '../Images/Node-logo.png';
import Expresslogo from '../Images/Express-logo.png';
import Mongologo from '../Images/Mongo-logo.png';
import Pythonlogo from '../Images/Python-logo.png';
import Djangologo from '../Images/Django-logo.png';
import ScikitLearnlogo from '../Images/ScikitLearn-logo.png';
import PHPlogo from '../Images/PHP-logo.png';
import MySQLlogo from '../Images/MySQL-logo.png';
import HTMLlogo from '../Images/HTML-logo.png';
import CSSlogo from '../Images/CSS-logo.png';

const imgStyle = {
    margin: 'auto',
    maxWidth: '750px'
}

const buttonStyle = {
    margin: '0 5px',
}

const Projects = () => {

    //Open New Tab
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <>
            <Container horizontal='true' style={{ textAlign: 'center', margin: 'auto', }}>

                <Card style={{ border: '5px solid', borderColor: 'red', margin: '5px', padding: '10px', textAlign: 'center', }}>
                    <Card.Title style={{ background: 'red', color: 'white', padding: '5px' }}>YourTube Playlist</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >
                        <Button style={buttonStyle} onClick={() => openInNewTab('https://yourtube-playlist.netlify.app')}>
                            Demo
                        </Button>
                        <Button variant="dark" style={buttonStyle} onClick={() => openInNewTab('https://github.com/Dulaya/yourtube-playlist-client')}>
                            Repo (Client)
                        </Button>
                        <Button variant="dark" style={buttonStyle} onClick={() => openInNewTab('https://github.com/Dulaya/yourtube-playlist-server')}>
                            Repo (Server)
                        </Button>
                    </Card.Subtitle>
                    <Card.Text >
                        YourTube Playlist is a web app that allows users to create playlists of YouTube videos simply by copying and pasting YouTube videos links.
                    </Card.Text>
                    <Carousel style={imgStyle} >
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: 'red' }}
                                className="d-block w-100"
                                src={YourTubePlaylist1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: 'red' }}
                                className="d-block w-100"
                                src={YourTubePlaylist2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: 'red' }}
                                className="d-block w-100"
                                src={YourTubePlaylist3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Row style={{ float: 'center' }}>
                        <Col style={columnStyle} >
                            <Image src={JSlogo} rounded style={logoStyleSmall} />
                            <Image src={Reactlogo} rounded style={logoStyleSmall} />
                            <Image src={Nodelogo} rounded style={logoStyleSmall} />
                            <Image src={Mongologo} rounded style={logoStyleSmall} />
                            <Image src={Expresslogo} rounded style={logoStyleSmall} />
                            <Image src={HTMLlogo} rounded style={logoStyleSmall} />
                            <Image src={CSSlogo} rounded style={logoStyleSmall} />
                        </Col>
                    </Row>
                </Card>

                <Card style={{
                    border: '5px solid', borderColor: '#0EA895', margin: '5px', padding: '10px', textAlign: 'center',
                }}>
                    <Card.Title style={{
                        backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(0, 95, 104, 1) 0%, rgba(15, 156, 168, 1) 90%)',
                        color: 'white',
                        padding: '5px'
                    }}>Math Chat</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >
                        <Button style={buttonStyle} onClick={() => openInNewTab('https://mathchat.netlify.app')}>
                            Demo
                        </Button>
                        <Button variant="dark" style={buttonStyle} onClick={() => openInNewTab('https://github.com/Dulaya/mathchat')}>
                            Repo
                        </Button>
                    </Card.Subtitle>
                    <Card.Text >
                        Math Chat is a chat tool that helps users solve math problems.
                    </Card.Text>
                    <Carousel style={imgStyle} >
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#0EA895' }}
                                className="d-block w-100"
                                src={MathChat1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#0EA895' }}
                                className="d-block w-100"
                                src={MathChat2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#0EA895' }}
                                className="d-block w-100"
                                src={MathChat3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Row style={{ float: 'center' }}>
                        <Col style={columnStyle} >
                            Tools Used:
                            <Image src={JSlogo} rounded style={logoStyleSmall} />
                            <Image src={Reactlogo} rounded style={logoStyleSmall} />
                            <Image src={HTMLlogo} rounded style={logoStyleSmall} />
                            <Image src={CSSlogo} rounded style={logoStyleSmall} />
                        </Col>
                    </Row>
                </Card>

                <Card style={{ border: '5px solid', borderColor: '#800000', margin: '5px', padding: '10px', textAlign: 'center', }}>
                    <Card.Title style={{ background: '#800000', color: 'white', padding: '5px' }}>One Stop Math</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >
                        <Button style={buttonStyle} onClick={() => openInNewTab('https://onestopmath.com')}>
                            Demo
                        </Button>
                    </Card.Subtitle>
                    <Card.Text >
                        One Stop Math is a website for learning math.
                    </Card.Text>
                    <Carousel style={imgStyle} >
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#800000' }}
                                className="d-block w-100"
                                src={OneStopMath1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#800000' }}
                                className="d-block w-100"
                                src={OneStopMath2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#800000' }}
                                className="d-block w-100"
                                src={OneStopMath3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Row style={{ float: 'center' }}>
                        <Col style={columnStyle} >
                            Tools Used:
                            <Image src={JSlogo} rounded style={logoStyleSmall} />
                            <Image src={PHPlogo} rounded style={logoStyleSmall} />
                            <Image src={MySQLlogo} rounded style={logoStyleSmall} />
                            <Image src={HTMLlogo} rounded style={logoStyleSmall} />
                            <Image src={CSSlogo} rounded style={logoStyleSmall} />
                        </Col>
                    </Row>
                </Card>

                <Card style={{ border: '5px solid', borderColor: 'blue', margin: '5px', padding: '10px', textAlign: 'center', }}>
                    <Card.Title style={{ background: 'blue', color: 'white', padding: '5px' }}>Video Poker Clone</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >
                        <Button style={buttonStyle} onClick={() => openInNewTab('https://videopokerclone.netlify.app/')}>
                            Demo
                        </Button>
                        <Button variant="dark" style={buttonStyle} onClick={() => openInNewTab('https://github.com/Dulaya/videopoker')}>
                            Repo
                        </Button>
                    </Card.Subtitle>
                    <Card.Text >
                        Video Poker Clone is a fake money video poker game.
                    </Card.Text>
                    <Carousel style={imgStyle} >
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: 'blue' }}
                                className="d-block w-100"
                                src={VideoPoker1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: 'blue' }}
                                className="d-block w-100"
                                src={VideoPoker2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Row style={{ float: 'center' }}>
                        <Col style={columnStyle} >
                            Tools Used:
                            <Image src={JSlogo} rounded style={logoStyleSmall} />
                            <Image src={HTMLlogo} rounded style={logoStyleSmall} />
                            <Image src={CSSlogo} rounded style={logoStyleSmall} />
                        </Col>
                    </Row>
                </Card>

                <Card style={{ border: '5px solid', borderColor: '#f5dd42', margin: '5px', padding: '10px', textAlign: 'center', }}>
                    <Card.Title style={{ background: '#f5dd42', color: 'white', padding: '5px' }}>Python Helper</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >
                        <Button style={buttonStyle} onClick={() => openInNewTab('https://dulaya.pythonanywhere.com/')}>
                            Demo
                        </Button>
                        <Button variant="dark" style={buttonStyle} onClick={() => openInNewTab('https://github.com/Dulaya/Python-Reference-Helper')}>
                            Repo
                        </Button>
                    </Card.Subtitle>
                    <Card.Text >
                        Python Helper is a search tool for finding Python references using machine learning.
                    </Card.Text>

                    <Carousel style={imgStyle} >
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#f5dd42' }}
                                className="d-block w-100"
                                src={PythonHelper1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ border: '2px dashed', borderColor: '#f5dd42' }}
                                className="d-block w-100"
                                src={PythonHelper2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Row style={{ float: 'center' }}>
                        <Col style={columnStyle} >
                            Tools Used:
                            <Image src={JSlogo} rounded style={logoStyleSmall} />
                            <Image src={Pythonlogo} rounded style={logoStyleSmall} />
                            <Image src={Djangologo} rounded style={logoStyleSmall} />
                            <Image src={ScikitLearnlogo} rounded style={logoStyleSmall} />
                        </Col>
                    </Row>
                </Card>


            </Container>

        </>
    );
}

export default Projects;