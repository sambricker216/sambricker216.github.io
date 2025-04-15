import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Accordion, AccordionBody, AccordionItem, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Page, Document, pdfjs } from 'react-pdf';
import WorkExpAccordion from '../Components/WorkExpAccordion';
import ProjectAccordion from '../Components/ProjectAccordion';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
  ).toString();

function Resume(){
  const [previewRes, setPreviewRes] = useState(false)

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
						<b>University of Florida</b>
						<br/>
						<text>Bachelor of Science in Computer Science with a 
							Minor in Business Administration</text>
						<br/>
						<text>June 2020 - May 2024</text>
						<br/>
						<text>GPA 3.26/4.00</text>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header> Work Experience </Accordion.Header>
					<WorkExpAccordion/>
				</Accordion.Item>
				<AccordionItem eventKey='2'>
					<Accordion.Header>Projects</Accordion.Header>
					<ProjectAccordion/>
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