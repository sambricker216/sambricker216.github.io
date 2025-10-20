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
							width='300'
							src="profile_pic.jpeg"
							rounded
						/>
					</Col>
					<Col>
						<p>
							Hello there. I'm Samuel Bricker, a software developer at NextEra Energy. I have a
							BS in Computer Science from the University of Florida and am currently pursuing an MS
							in Business Analytics from Florida Atlantic University.
						</p>
						<p>
							Between my education and work experience, I have developed a strong understanding of data,
							specifically how to move it, format it, and make it usable. This includes creating
							ETL pipelines and writing SQL queries that make data avaiable and understandable.
							I also have experince with Power BI, where I can visualize data the data I extract and form.
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