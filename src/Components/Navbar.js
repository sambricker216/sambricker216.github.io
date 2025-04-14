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
				<Nav.Link href="/"><h5>Homepage</h5></Nav.Link>
				<Nav.Link href="/#/resume"><h5>Resume</h5></Nav.Link>
				<Nav.Link href="https://github.com/sambricker216" target="_blank" rel="noopener noreferrer">
					<h5>GitHub</h5>
				</Nav.Link>
				<Nav.Link 
					href="https://www.linkedin.com/in/samuel-bricker/" 
					target="_blank" 
					rel="noopener noreferrer">
					<h5>LinkedIn</h5>
				</Nav.Link>
			</Nav>
		</Navbar>
	)
}

export default Navigationbar;