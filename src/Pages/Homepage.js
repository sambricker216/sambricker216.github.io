import { Image, Row, Col } from 'react-bootstrap';
import '../App.css';

export default function Homepage(){
	return(
		<section className="intro">
			<Row className="align-items-center g-4">
				<Col xs={12} md={4} className="text-center">
					<Image
						className="headshot"
						src="profile_pic.jpeg"
						alt="Samuel Bricker"
						rounded
					/>
				</Col>
				<Col xs={12} md={8}>
					<h2 className="section-title">About Me</h2>
					<p>
						Hello there. I'm Samuel Bricker, a software developer at NextEra Energy. I have a
						B.S. in Computer Science from the University of Florida and am currently pursuing an M.S.
						in Business Analytics from Florida Atlantic University, which I plan to complete in Dec 2026.
					</p>
					<p>
						Between my education and work experience, I have developed a strong understanding of how
						data is modeled and used in the business space and how to transform data to make it usable. 
						This includes creating ETL pipelines and writing SQL queries that make data 
						available and understandable. I also have experience with Power BI, visualizing the data extracted 
						and formed by ETL.
					</p>
					<p>
						Further information can be found on my <a href="https://www.linkedin.com/in/samuel-bricker/" target="_blank" rel="noreferrer">
						LinkedIn</a> and <a href="https://github.com/sambricker216" target="_blank" rel="noreferrer"> GitHub </a> pages. I can also be
						reached by email at <a href="mailto:sbricker216@gmail.com">sbricker216@gmail.com</a>.
					</p>
				</Col>
			</Row>
		</section>
	);
}
