import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

function Navigationbar(){
    return (
        <Navbar className="navbar navbar-expand-lg custom-navbar">
            <Nav>
                <Nav.Link href="/">Homepage</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigationbar;