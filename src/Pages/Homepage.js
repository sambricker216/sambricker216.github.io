import { Image, Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Homepage(){
	return(
		<div className="App-header">
			<h3>About me</h3>
			<Container className="mt-4">
				<Row>
					<Col>
						<Image
							src="https://placehold.co/300x200"
							rounded
							className="float-start me-3 mb-3"
						/>
						<p>
							Hello there. I'm Samuel Bricker, an aspiring software engineer and graduate of
							the Univeristy of Florida {'\u{1F40A}'} {'\u{1F40A}'} from Boca Raton, FL.
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
							Links to my GitHub and LinkedIn can be found in the navigation bar at the top of the page.
							I can also be reached by email at sbricker216@gmail.com. My resume can be viewed
							and downloaded on the resume page. Thanks for visiting!
						</p>
					</Col>
				</Row>
    	</Container>
		</div>
	);
}