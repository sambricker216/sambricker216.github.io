import { Accordion, AccordionBody, AccordionItem, Col, Container, Row } from 'react-bootstrap';

function WorkExpAccordion(){
    return (
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
    )
}

export default WorkExpAccordion;