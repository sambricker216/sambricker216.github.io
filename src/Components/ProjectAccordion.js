import { Accordion, AccordionBody, AccordionItem, Col, Container, Row } from 'react-bootstrap';

function ProjectAccordion(){
    return (
      <Accordion.Body>
				<Accordion>
					<Accordion.Item eventKey='4'>
						<Accordion.Header>
							LanPoker (WIP)
						</Accordion.Header>
						<Accordion.Body>
							<Container>
								<Row>
									<Col>
										<a 
											href='https://github.com/sambricker216/personal-site'
											target="_blank"
											rel="noreferrer">
											Link to Repo
										</a>
									</Col>
									<Col>
										<b>Language</b>: Python
									</Col>
								</Row>
								<Row>
									<p>
										This is a project I am currently working on to run a CLI based poker game on a LAN. The poker 
										part is being done through object oriented principals, starting at with the Game class. The
										Game class is responsible for handling game states: generating hands, cycling through hands,
										determining winning hands, etc. There is also a Player class for handling a specific player's
										state, such as what cards they have and what actions they take. The websocket will be
										split in the host, which runs the game class, and the client class, which the players run.
									</p>
								</Row>
							</Container>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>
							Personal Site
						</Accordion.Header>
						<Accordion.Body>
							<Container>
								<Row>
									<Col>
										<a 
											href='https://github.com/sambricker216/personal-site'
											target="_blank"
											rel="noreferrer">
											Link to Repo
										</a>
									</Col>
									<Col>
										<b>Languages</b>: React, Javascript, CSS
									</Col>
								</Row>
								<Row>
									<p>
										This is the project you're looking at right now. It's my chance to compile 
										everything I've done into one, easy access location. All my projects, work
										experience, langauge and framework knowledge are all listed here. My resume
										can also be previewed and downloaded at the bottom of the page.
									</p>
								</Row>
							</Container>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>
							Pixel Pundits
						</Accordion.Header>
						<Accordion.Body>
							<Container>
								<Row>
									<Col>
										<text>
											<a 
												href='https://github.com/SkylarStewart/Pixel-Pundits'
												target="_blank"
												rel="noreferrer">
												Link to Repo
											</a>

											{" "}

											<a
												href='https://skylarstewart.github.io/Pixel-Pundits/#/login?redirectTo=/'
												target="_blank"
												rel="noreferrer">
												Link to Site
											</a>
										</text>
									</Col>
									<Col>
										<b>Languages</b>: React, Javascript, Typescript, CSS
									</Col>
								</Row>
								<Row>
									<p>
										This is my Senior Project I worked on at the University of Florida. It is a web app
										that serves as a trading platform for players of the Magic the Gathering trading card
										game. The app works like a digital marketplace where users can upload their collection,
										search for cards they want, and offer to trade cards with other users. I was involved with
										most of the front end development, designing many of the page layouts and overall UI. I
										also designed the API calls to the Scryfall API, where we got data about the card (including
										images and pricing).
									</p>
								</Row>
							</Container>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>
							Contagion Simulator
						</Accordion.Header>
						<Accordion.Body>
							<Container>
								<Row>
									<Col>
										<a 
											href='https://github.com/sambricker216/ContagionSim'
											target="_blank"
											rel="noreferrer">
											Link to Repo
										</a>
									</Col>
									<Col>
										<b>Languages</b>: Python
									</Col>
								</Row>
								<Row>
									<p>
										Inspired by the recent COVID pandemic, I wanted to create a way to simulate
										virus transmission within a population. To this end, I created the Contagion Simulator.
										The program works by taking in a variety of user set factors, such as population size, 
										lethality, and immunity. It then runs randomly generated cycles to see various outcomes of
										those inputs. For example, if a user wanted to see what effect natural immunity header
										on the spread of a virus, they could set the built up immunity value to really high.
										The UI is built through the Pygame library.
									</p>
								</Row>
							</Container>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='3'>
						<Accordion.Header>
							Calculator
						</Accordion.Header>
						<Accordion.Body>
							<Container>
								<Row>
									<Col>
										<a 
											href='https://github.com/sambricker216/Calculator'
											target="_blank"
											rel="noreferrer">
											Link to Repo
										</a>
									</Col>
									<Col>
										<b>Languages</b>: Java
									</Col>
								</Row>
								<Row>
									<p>
										This project was influenced by the semester long project of the University of
										Florida's Programming Langauge Concepts course. The goal of this project was
										to take a fictional programming langauge and convert it into executable Java code.
										This was done by taking the fictional code through a series of steps: breaking the
										text down into tokens through regex, grouping the tokens into abstract syntax trees,
										type checking the values, and finally transalting from there. The Calculator is built
										on that premise. The user provides a mathematical expression that is ran through a
										similar series of steps, except a calulation is made instead of translating to
										Java code. The UI was done through JFrame and testing was done through JUnit. 
									</p>
								</Row>
							</Container>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Accordion.Body>
    )
}

export default ProjectAccordion;