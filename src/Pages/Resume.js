import '../App.css';
import Button from 'react-bootstrap/Button'
import { Accordion, Col, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { Page, Document, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString();

const RESUME_FILE = 'Samuel Bricker Resume.pdf';

function Resume(){
	const [previewRes, setPreviewRes] = useState(false)
	const [accordionData, setAccordionData] = useState()
	const [previewWidth, setPreviewWidth] = useState(800)
	const previewRef = useRef(null)

	useEffect(() => {
		fetch('AccordionData.json').then((data) => data.json()).then((data) => setAccordionData(data))
	}, [])

	useEffect(() => {
		if (!previewRes) return;
		function updateWidth(){
			if (previewRef.current) setPreviewWidth(Math.min(previewRef.current.clientWidth, 850))
		}
		updateWidth()
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [previewRes])

	function resumeDownload(){
		const link = document.createElement('a');
		link.href = RESUME_FILE;
		link.download = RESUME_FILE;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function togglePreview(){
		setPreviewRes(!previewRes)
	}

	return(
		<section className="resume">
			<h2 className="section-title">Resume</h2>
			<Accordion>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Work Experience</Accordion.Header>
					<Accordion.Body>
						<Accordion>
							{accordionData && accordionData.WorkExperience.map((exp, index) => (
								<Accordion.Item eventKey={String(index)} key={exp.Company}>
									<Accordion.Header>
										<span className="item-header">
											<b>{exp.Company}</b>
											<span className="item-meta">{exp.Roles[0].Title}</span>
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<p className="item-location">{exp.Location}</p>
										{exp.Roles.map((role) => (
											<div className="role" key={role.Title}>
												<div className="role-header">
													<i>{role.Title}</i>
													<span>{role.Duration}</span>
												</div>
												<ul>
													{role.Responsibilities.map((resp, key) => (
														<li key={key}>{resp}</li>
													))}
												</ul>
											</div>
										))}
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>Education</Accordion.Header>
					<Accordion.Body>
						{accordionData && accordionData.Education.map((education) => (
							<div className="entry" key={education.School}>
								<div className="role-header">
									<b>{education.School}</b>
									<span>{education.Duration}</span>
								</div>
								<div>{education.Degree}</div>
								<div>GPA: {education.GPA}</div>
							</div>
						))}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>Skills</Accordion.Header>
					{accordionData && <Accordion.Body>
						<Row className="g-3">
							<Col xs={12} md={4}>
								<h6>Languages</h6>
								<ul>
									{accordionData.LT.Languages.map((lan) => (<li key={lan}>{lan}</li>))}
								</ul>
							</Col>
							<Col xs={12} md={4}>
								<h6>Technologies</h6>
								<ul>
									{accordionData.LT.Technologies.map((tech) => (<li key={tech}>{tech}</li>))}
								</ul>
							</Col>
							<Col xs={12} md={4}>
								<h6>Data Engineering</h6>
								<ul>
									{accordionData.LT.DataEngineering.map((skill) => (<li key={skill}>{skill}</li>))}
								</ul>
							</Col>
						</Row>
					</Accordion.Body>}
				</Accordion.Item>
				<Accordion.Item eventKey='3'>
					<Accordion.Header>Certifications</Accordion.Header>
					{accordionData && <Accordion.Body>
						{accordionData.Certifications.map((cert) => (
							<div className="entry" key={cert.Name}>
								<div className="role-header">
									<b>{cert.Name}</b>
									<span>{cert.Date}</span>
								</div>
								<div>{cert.Issuer}</div>
							</div>
						))}
					</Accordion.Body>}
				</Accordion.Item>
				<Accordion.Item eventKey='4'>
					<Accordion.Header>Projects</Accordion.Header>
					<Accordion.Body>
						<Accordion>
							{accordionData && accordionData.Projects.map((project, index) => (
								<Accordion.Item eventKey={String(index)} key={project.Name}>
									<Accordion.Header>
										<span className="item-header">
											<b>{project.Name}</b>
											<span className="item-meta">{project.Languages}</span>
										</span>
									</Accordion.Header>
									<Accordion.Body>
										<p>{project.Description}</p>
										<div className="project-links">
											<a href={project.URL} target="_blank" rel="noreferrer">
												View Repository
											</a>
											{project.Host && <a href={project.Host} target="_blank" rel="noreferrer">
												View Live Site
											</a>}
										</div>
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			<div className="link-row resume-actions">
				<Button onClick={resumeDownload}>Download Resume</Button>
				<Button onClick={togglePreview}>{previewRes ? 'Hide Preview' : 'Preview Resume'}</Button>
			</div>
			{previewRes && <div className="resume-preview" ref={previewRef}>
				<Document file={RESUME_FILE}>
					<Page
						width={previewWidth}
						renderTextLayer={false}
						renderAnnotationLayer={false}
						pageNumber={1}/>
				</Document>
			</div>}
		</section>
	)
}

export default Resume;
