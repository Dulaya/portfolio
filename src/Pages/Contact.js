import React from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { AiOutlineMail } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { FaGithubAlt } from 'react-icons/fa';
import { BsPersonBoundingBox } from 'react-icons/bs';

const Contact = () => {
    //Open New Tab
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <Table striped bordered hover /*className='d-flex flex-column min-vh-100 justify-content-center align-items-center'*/
            style={{
                margin: '10px auto',
            }}
        >
            <tbody >
                <tr>
                    <td><AiOutlineMail style={{color: 'red', fontSize: '1.5rem'}} /> Email</td>
                    <td >dulaya.saennok@gmail.com</td>
                </tr>
                <tr>
                    <td><ImLinkedin style={{color: '#1e7cd4', fontSize: '1.5rem'}} /> LinkedIn</td>
                    <td>
                        <Button onClick={() => openInNewTab('https://linkedin.com/in/dulaya')}>https://linkedin.com/in/dulaya</Button>
                    </td>
                </tr>
                <tr>
                    <td><FaGithubAlt style={{fontSize: '1.5rem'}} /> GitHub</td>
                    <td>
                        <Button variant='dark' onClick={() => openInNewTab('https://github.com/dulaya')}>https://github.com/dulaya</Button>
                    </td>
                </tr>
                <tr>
                    <td><BsPersonBoundingBox style={{fontSize: '1.5rem'}} /> Personal Website</td>
                    <td>
                        <Button variant='info' onClick={() => openInNewTab('https://dulayasaennok.com')}>https://dulayasaennok.com</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );

}

export default Contact;