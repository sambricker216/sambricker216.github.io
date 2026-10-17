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
						Further information can be found on my <a href="https://www.linkedin.com/in/samuel-bricker/" target="_blank" rel="noreferrer">
						LinkedIn</a> and <a href="https://github.com/sambricker216" target="_blank" rel="noreferrer"> GitHub </a> pages. I can also be
						reached by email at sbricker216@gmail.com.
					</p>
				</Col>
			</Row>
		</section>
	);
}
