import React from "react";

import { Carousel, Container, Row, Col, CardDeck, Card, Button, Image, ButtonGroup, } from 'react-bootstrap';
import { FaGithubAlt } from 'react-icons/fa';

import { columnStyle, logoStyleSmall } from './Styles.js';

import Collage from '../Images/Collage.png';
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

const shadow = {
    firstShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
}

const imgStyle = {
    boxShadow: shadow.firstShadow,
    margin: 'auto',
    //maxWidth: '750px'
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

    const youTubePlayList = [Collage, YourTubePlaylist1, YourTubePlaylist2, YourTubePlaylist3];
    const mathChat = [MathChat1, MathChat2, MathChat3];
    const oneStopMath = [OneStopMath1, OneStopMath2, OneStopMath3];
    const videoPoker = [VideoPoker1, VideoPoker2];
    const pythonHelper = [PythonHelper1, PythonHelper2];

    return (
        <>
            <Container horizontal='true'>

                <Card style={{ maxWidth: '750px', margin: '25px auto', }}>
                    <Card.Title style={{
                        color: 'white', padding: '5px', textAlign: 'center',
                        background: `linear-gradient(to right, #e45826, red)`,
                    }}>YouTube Playlist</Card.Title>
                    <Carousel style={imgStyle} >
                        {
                            youTubePlayList.map(picture =>
                                <Carousel.Item key={picture}>
                                    <img
                                        className="d-block w-100"
                                        src={picture}
                                        alt={picture}
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <Card.Body style={{
                        color: 'white',
                        textAlign: 'center',
                        background: `linear-gradient(to right, #e45826, red)`,
                    }}>
                        <Row style={{ textAlign: 'center' }}>
                            <Col style={{ maxWidth: '120px' }}>
                                <ButtonGroup vertical>
                                    <Button variant='outline-light' style={{}} onClick={() => openInNewTab('https://yt-playlist.com')}>
                                        Demo
                        </Button>
                                    <Button variant="light" style={{ border: '1px solid', borderColor: 'white' }} onClick={() => openInNewTab('https://github.com/Dulaya/youtube-playlist-client')}>
                                        <FaGithubAlt />  client
                        </Button>
                                    <Button variant="light" style={{ border: '1px solid', borderColor: 'white' }} onClick={() => openInNewTab('https://github.com/Dulaya/youtube-playlist-server')}>
                                        <FaGithubAlt />  server
                        </Button>
                                </ButtonGroup>
                            </Col>
                            <Col>
                                <Card.Text >
                                    YouTube Playlist ( <span onClick={() => openInNewTab('https://yt-playlist.com')}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                        }}>
                                        https://yt-playlist.com
                                            </span> )
                                    is a web app that allows users to create an account and login in order to create a playlist of YouTube videos
                                    simply by copying and pasting YouTube videos links. Users may also upload pictures corresponding to the videos.
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <Row >
                            <Col style={columnStyle} >
                                <Image src={JSlogo} rounded style={logoStyleSmall} />
                                <Image src={Reactlogo} rounded style={logoStyleSmall} />
                                <Image src={Nodelogo} rounded style={logoStyleSmall} />
                                <Image src={Mongologo} rounded style={logoStyleSmall} />
                                <Image src={Expresslogo} rounded style={logoStyleSmall} />
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <Card style={{ maxWidth: '750px', margin: '25px auto', }}>
                    <Card.Title style={{
                        color: 'white', padding: '5px', textAlign: 'center',
                        backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(0, 95, 104, 1) 0%, rgba(15, 156, 168, 1) 90%)',
                    }}>mαth chαt</Card.Title>
                    <Carousel style={imgStyle} >
                        {
                            mathChat.map(picture =>
                                <Carousel.Item key={picture}>
                                    <img
                                        className="d-block w-100"
                                        src={picture}
                                        alt={picture}
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <Card.Body style={{
                        color: 'white',
                        textAlign: 'center',
                        backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(0, 95, 104, 1) 0%, rgba(15, 156, 168, 1) 90%)',
                    }}>
                        <Row style={{ textAlign: 'center' }}>
                            <Col style={{ maxWidth: '120px' }}>
                                <ButtonGroup vertical>
                                    <Button variant='outline-light' style={{}} onClick={() => openInNewTab('https://mathchat.netlify.app')}>Demo</Button>
                                    <Button variant="light" style={{ border: '1px solid', borderColor: 'white' }} onClick={() => openInNewTab('https://github.com/Dulaya/mathchat')}>
                                        <FaGithubAlt />
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col>
                                <Card.Text >
                                    mαth chαt ( <span onClick={() => openInNewTab('https://mathchat.netlify.app')}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                        }}>
                                        mathchat.netlify.app
                                            </span> )
                                    is a chat interface web app that help users with algebra homework. Users can type into the input field on an algebra topic
                                    such as Pythagorean Theorem. An interface will pop-up, allowing users to input numbers for solving Pythagorean Theorem.
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <Row >
                            <Col style={columnStyle} >
                                <Image src={JSlogo} rounded style={logoStyleSmall} />
                                <Image src={Reactlogo} rounded style={logoStyleSmall} />
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <Card style={{ maxWidth: '750px', margin: '25px auto', }}>
                    <Card.Title style={{
                        color: 'white', padding: '5px', textAlign: 'center',
                        background: `linear-gradient(to right, #91091e, #ec4646)`,
                    }}>One Stop Math</Card.Title>
                    <Carousel style={imgStyle} >
                        {
                            oneStopMath.map(picture =>
                                <Carousel.Item key={picture}>
                                    <img
                                        className="d-block w-100"
                                        src={picture}
                                        alt={picture}
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <Card.Body style={{
                        color: 'white',
                        textAlign: 'center',
                        background: `linear-gradient(to right, #91091e, #ec4646)`,
                    }}>
                        <Row style={{ textAlign: 'center' }}>
                            <Col style={{ maxWidth: '120px' }}>
                                <ButtonGroup vertical>
                                    <Button variant='outline-light' style={{}} onClick={() => openInNewTab('https://onestopmath.com')}>Demo</Button>
                                </ButtonGroup>
                            </Col>
                            <Col>
                                <Card.Text >
                                    One Stop Math ( <span onClick={() => openInNewTab('https://onestopmath.com')}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                        }}>
                                        https://onestopmath.com
                                            </span> )
                                    is a website containing math lessons and a forum, allowing users to ask and answer math questions.
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <Row >
                            <Col style={columnStyle} >
                                <Image src={JSlogo} rounded style={logoStyleSmall} />
                                <Image src={PHPlogo} rounded style={logoStyleSmall} />
                                <Image src={MySQLlogo} rounded style={logoStyleSmall} />
                                <Image src={HTMLlogo} rounded style={logoStyleSmall} />
                                <Image src={CSSlogo} rounded style={logoStyleSmall} />
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <Card style={{ maxWidth: '750px', margin: '25px auto', }}>
                    <Card.Title style={{
                        color: 'white', padding: '5px', textAlign: 'center',
                        background: `linear-gradient(to right, blue, #111d5e)`,
                    }}>Video Poker Clone</Card.Title>
                    <Carousel style={imgStyle} >
                        {
                            videoPoker.map(picture =>
                                <Carousel.Item key={picture}>
                                    <img
                                        className="d-block w-100"
                                        src={picture}
                                        alt={picture}
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <Card.Body style={{
                        color: 'white',
                        textAlign: 'center',
                        background: `linear-gradient(to right, blue, #111d5e)`,
                    }}>
                        <Row style={{ textAlign: 'center' }}>
                            <Col style={{ maxWidth: '120px' }}>
                                <ButtonGroup vertical>
                                    <Button variant='outline-light' style={{}} onClick={() => openInNewTab('https://videopokerclone.netlify.app/')}>Demo</Button>
                                    <Button variant="light" style={{ border: '1px solid', borderColor: 'white' }} onClick={() => openInNewTab('https://github.com/Dulaya/videopoker')}>
                                        <FaGithubAlt />
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col>
                                <Card.Text >
                                    Video Poker Clone ( <span onClick={() => openInNewTab('https://videopokerclone.netlify.app/')}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                        }}>
                                        https://videopokerclone.netlify.app/
                                            </span> )
                                    is a fake money web app of video poker.
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <Row >
                            <Col style={columnStyle} >
                                <Image src={JSlogo} rounded style={logoStyleSmall} />
                                <Image src={HTMLlogo} rounded style={logoStyleSmall} />
                                <Image src={CSSlogo} rounded style={logoStyleSmall} />
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

                <Card style={{ maxWidth: '750px', margin: '25px auto', }}>
                    <Card.Title style={{
                        padding: '5px', textAlign: 'center',
                        background: `linear-gradient(to right, #f5dd42, yellow)`,
                    }}>Python Helper</Card.Title>
                    <Carousel style={imgStyle} >
                        {
                            pythonHelper.map(picture =>
                                <Carousel.Item key={picture}>
                                    <img
                                        className="d-block w-100"
                                        src={picture}
                                        alt={picture}
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <Card.Body style={{
                        textAlign: 'center',
                        background: `linear-gradient(to right, #f5dd42, yellow)`,
                    }}>
                        <Row style={{ textAlign: 'center' }}>
                            <Col style={{ maxWidth: '120px' }}>
                                <ButtonGroup vertical>
                                    <Button variant='outline-dark' style={{}} onClick={() => openInNewTab('https://dulaya.pythonanywhere.com/')}>Demo</Button>
                                    <Button variant="light" style={{ border: '1px solid', borderColor: 'white' }} onClick={() => openInNewTab('https://github.com/Dulaya/Python-Reference-Helper')}>
                                        <FaGithubAlt />
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col>
                                <Card.Text >
                                    Python Helper ( <span onClick={() => openInNewTab('https://dulaya.pythonanywhere.com/')}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                        }}>
                                        https://dulaya.pythonanywhere.com/
                                            </span> )
                                     is a search tool for finding Python references using machine learning.
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ textAlign: 'center' }}>
                        <Row >
                            <Col style={columnStyle} >
                                <Image src={JSlogo} rounded style={logoStyleSmall} />
                                <Image src={Pythonlogo} rounded style={logoStyleSmall} />
                                <Image src={Djangologo} rounded style={logoStyleSmall} />
                                <Image src={ScikitLearnlogo} rounded style={logoStyleSmall} />
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>

            </Container>

        </>
    );
}

export default Projects;