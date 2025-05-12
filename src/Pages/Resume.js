import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Accordion, AccordionItem, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Page, Document, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
  ).toString();

function Resume(){
	const [previewRes, setPreviewRes] = useState(false)
	const [accordionData, setAccordionData] = useState()

	useEffect(() => {
		fetch('AccordionData.json').then((data) => data.json()).then((data) => setAccordionData(data)).then(() => console.log(accordionData))
	}, [])

	function resumeDownload(){
		const link = document.createElement('a');
		link.href = 'Samuel Bricker Resume.pdf';
		link.download = 'Samuel Bricker Resume.pdf'; 
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function togglePreview(){
		setPreviewRes(!previewRes)
	}

	return(
		<div style={{paddingBottom: '2%'}}>
			<Accordion style={{paddingTop: '2%'}}>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Education</Accordion.Header>
					<Accordion.Body>
						{accordionData && accordionData.Education.map((education, key) => (
							<div key={key}>
								<b>{education.School}</b>
								<br/>
								<text>{education.Degree}</text>
								<br/>
								<text>{education.Duration}</text>
								<br/>
								<text>GPA {education.GPA}</text>
							</div>
						))}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header> Work Experience </Accordion.Header>
					<Accordion.Body>
						<Accordion>
							{accordionData && accordionData.WorkExperience.map((exp, key) =>
								<div>
									<Accordion.Item eventKey={key}>
										<Accordion.Header>
											<text><b>{exp.Company}</b> {exp.Title}</text>
										</Accordion.Header>
										<Accordion.Body>
											<p>{exp.Duration} {exp.Location}</p>
											<ul>
												{exp.Responsibilities.map((resp, key) =>(
													<li>{resp}</li>
												))}
											</ul>
										</Accordion.Body>
									</Accordion.Item>
								</div>
							)}
						</Accordion>
					</Accordion.Body>
				</Accordion.Item>
				<AccordionItem eventKey='2'>
					<Accordion.Header>Projects</Accordion.Header>
					<Accordion.Body>
						<Accordion>
							{accordionData && accordionData.Projects.map((project, index) => (
								<div>
									<Accordion.Item eventKey={index}>
										<Accordion.Header>{project.Name}</Accordion.Header>
										<Accordion.Body>
											<Container>
												<Row>
													<Col>
														<a
															href={project.URL}
															target="_blank"
															rel="noreferrer">
															Link to Repo
														</a> {" "}
														{project.Host && <a
															href={project.Host}
															target="_blank"
															rel="noreferrer">
															Link to Site
														</a>}
													</Col>
													<Col>
														<b>Langauges:</b> {project.Languages}
													</Col>
												</Row>
												<Row>
													<p>{project.Description}</p>
												</Row>
											</Container>
										</Accordion.Body>
									</Accordion.Item>
								</div>
							))}
						</Accordion>
					</Accordion.Body>
				</AccordionItem>
				<AccordionItem eventKey='3'>
					<Accordion.Header>Languages and Technologies</Accordion.Header>
					{accordionData && <Accordion.Body>
						<Container>
							<Row style={{justifyItems: 'center'}}>
								<Col>
									<h6>Languages</h6>
									<ul>
										{accordionData.LT.Languages.map((lan, key)=>(<li>{lan}</li>))}
									</ul>
								</Col>
								<Col>
									<h6>Technologies</h6>
									<ul>
										{accordionData.LT.Technologies.map((tech, key)=>(<li>{tech}</li>))}
									</ul>
								</Col>
							</Row>
						</Container>
					</Accordion.Body>}
				</AccordionItem>
			</Accordion>
			<Container style={{float: 'left', marginTop: '2%'}}>
				<Button onClick={resumeDownload}>Download Resume</Button>
				<Button onClick={togglePreview} style={{marginLeft: 5}}>Preview Resume</Button>
			</Container>
		<br></br>
			{previewRes && <Container style={{paddingTop: '5%', justifyItems: 'center'}}>
				<Document file="Samuel Bricker Resume.pdf">
					<Page 
			size="A1" 
			renderTextLayer={false}
			renderAnnotationLayer={false}
			customTextRenderer={false} 
			pageNumber={1}/>
				</Document>
			</Container>}
		</div>
	)
}

export default Resume;