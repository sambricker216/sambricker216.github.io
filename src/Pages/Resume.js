import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Accordion, AccordionBody, AccordionItem, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

function Resume(){
	const [activeKey, setActiveKey] = useState(null)
	const [expActiveKey, setExpActiveKey] = useState(null)

	const handleActiveToggle = (key) => {
    setActiveKey(prevKey => (prevKey === key ? null : key));
  };

	const handleExpToggle = (key) => {
    setExpActiveKey(prevKey => (prevKey === key ? null : key));
  };

	function resumeDownload(){
			const link = document.createElement('a');
			link.href = 'Samuel Bricker Resume.pdf';
			link.download = 'Samuel Bricker Resume.pdf'; 
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
	}

	return(
		<div>
			<Container style={{float: 'left'}}>
					<Button onClick={resumeDownload}>Download Resume</Button>
					<text style={{paddingLeft: '2%'}}>Last Updated 4/10/2025</text>
			</Container>
			<br></br>
			<Accordion class='accordion' style={{paddingTop: '2%'}}>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Education</Accordion.Header>
					<Accordion.Body>
						<b>University of Florida</b>
						<br/>
						<text>Bachelor of Science in Computer Science, Minor in Business Administration</text>
						<br/>
						<text>June 2020 - May 2024</text>
						<br/>
						<text>GPA 3.26/4.00</text>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header> Work Experience </Accordion.Header>
					<Accordion.Body>
						<Accordion>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>
									<text><b>Skyline Analytics</b> Junior ETL Software Engineer</text>
								</Accordion.Header>
								<AccordionBody>
									<p>December 2024-March 2025 Boca Raton, FL</p>
									<ul>
										<li>Developed and deployed Microsoft Azure function apps to retrieve and 
											store client data from multiple APIs in internal databases</li>
										<li>Designed and optimized database views to enable financial analysts 
											to accurately and clearly assess aggregated client data</li>
										<li> Built an automated testing program to verify that client report emails were 
											correctly sent and formatted from an internal tool</li>
									</ul>
								</AccordionBody>
							</Accordion.Item>
							<Accordion.Item eventKey='1'>
								<Accordion.Header>
									<text><b>Agency Pipe</b> Software Engineering Intern</text>
								</Accordion.Header>
								<Accordion.Body>
									<p>June 2023-October 2024 Delray Beach, FL</p>
									<ul>
										<li> Contributed to backend development by implementing processes for account 
											management, data automation uploads, and building an internal REST API</li>
										<li>Developed a batch processing system that enables users to integrate their 
											data with existing systems, enhancing data accessibility and usability</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='2'>
								<Accordion.Header>
									<text><b>Family Business Funding</b> Information Technology Intern</text>
								</Accordion.Header>
								<Accordion.Body>
								<p>January 2023-December 2023 Boca Raton, FL</p>
									<ul>
										<li> Directed the transition to OrgMeter, an external CRM software, to streamline 
											business operations and ensure data organization</li>
										<li>Facilitated communication between employees and CRM software development teams, 
											ensuring the software met both employee and client needs</li>
										<li>Led the migration of data for over 1,000 clients into customer 
											relationship management (CRM) software</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Accordion.Body>
				</Accordion.Item>
				<AccordionItem eventKey='2'>
					<Accordion.Header>Projects</Accordion.Header>
					<Accordion.Body>
						<Container>
							<Row>
									<Col><b>Project</b></Col>
									<Col><b>Languages and Frameworks</b></Col>
							</Row>
							<Row>
								<Col>
									<a 
										href='https://github.com/sambricker216/personal-site'
										target="_blank">
										Personal Site
									</a>
								</Col>
								<Col>React, Javascript, CSS</Col>
							</Row>
							<Row>
								<Col> 
									<a 
										href='https://github.com/SkylarStewart/Pixel-Pundits'
										target="_blank">
										Pixel Pundits
									</a>
								</Col>
								<Col>React, Javascript, Typescript, CSS</Col>
							</Row>
							<Row>
								<Col>
									<a 
										href='https://github.com/sambricker216/ContagionSim'
										target="_blank">
										Contagion Simulator
									</a>
								</Col>
								<Col>Python</Col>
							</Row>
							<Row>
								<Col>
									<a 
										href='https://github.com/sambricker216/Calculator'
										target="_blank">
										Calculator
									</a>
								</Col>
								<Col>Java</Col>
							</Row>
						</Container>
					</Accordion.Body>
				</AccordionItem>
				<AccordionItem eventKey='3'>
					<Accordion.Header>Languages and Technologies</Accordion.Header>
					<Accordion.Body>
						<Container>
							<Row style={{justifyItems: 'center'}}>
								<Col>
									<h6>Languages</h6>
									<ul>
										<li>Python</li>
										<li>SQL</li>
										<li>Java</li>
										<li>React/Javascript</li>
										<li>C++</li>
										<li>C#/.NET</li>
									</ul>
								</Col>
								<Col>
									<h6>Technologies</h6>
									<ul>
										<li>Microsoft SQL Server</li>
										<li>Postgres DB</li>
										<li>Git</li>
										<li>Microsft Azure</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</Accordion.Body>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default Resume;