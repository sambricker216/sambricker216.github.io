import { Image, Row, Col, Container, Button } from 'react-bootstrap';
import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Homepage(){
	return(
		<div className="App-header">
			<Container className="mt-4">
				<Row>
					<Col>
						<Image
							src="https://placehold.co/300x200"
							rounded
						/>
					</Col>
					<Col>
						<p>
							Hello there. I'm Samuel Bricker, an aspiring software engineer and graduate of
							the Univeristy of Florida from Boca Raton, FL.
						</p>
						<p>
							I am currently looking for my next opportunity to work in the field.  I’m especially 
							interested in roles related to web development or database engineering, but I’m open 
							to working in any area. Between my coursework at the University of Florida and previous
							employment, I've developed experience working in web development (front and back end) and
							ETL processes. I also have experience working with multiple languages and frameworks, such
							as Python, SQL, React, and Java.
						</p>
						<p>
							Further information can be found on my <a href="https://www.linkedin.com/in/samuel-bricker/" target="_blank">
							LinkedIn</a> and <a href="https://github.com/sambricker216" target="_blank"> GitHub </a> pages. I can also be
							reached by email at sbricker216@gmail.com.
						</p>
					</Col>
				</Row>
    	</Container>
		</div>
	);
}