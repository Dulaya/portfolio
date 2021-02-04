import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {

    return (
        <Router>
            <Nav className="justify-content-center" defaultActiveKey="/" as='ul' style={{fontSize: '1.5rem', margin: '10px'}}>
                <Nav.Item>
                    <Link to="/" style={{margin: '10px'}}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/projects" style={{margin: '10px'}}>Projects</Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/contact" style={{margin: '10px'}}>Contact</Link>
                </Nav.Item>
            </Nav>

            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/projects'>
                <Projects />
            </Route>

            <Route exact path='/resume'>
            </Route>

            <Route exact path='/contact'>
                <Contact />
            </Route>

        </Router>
    );
}

export default App;