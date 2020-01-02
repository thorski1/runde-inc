import React from "react";
import {
	Grid,
	Image,
	Container,
	Segment,
	Divider,
	Icon,
	Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Services from "../components/Services";

function About() {
	return (
		<div>
			<Header as="h1" textAlign="center">
				ABOUT RUNDE & PARTNERS, INC.
				<hr className="underline" />
			</Header>
			<Container>
				<Segment raised>
					<Grid>
						<Grid.Row centered columns={1}>
							<Grid.Column>
								<Image
									rounded
									src="/images/building1.jpg"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered columns={1}>
							<Grid.Column>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										Runde & Partners, Inc. is a full-service
										real estate appraisal and valuation
										consulting company serving Northern
										California. With over 25 years of
										valuation experience in the area, we
										provide a long-term perspective on the
										local and regional real estate market
										and a depth of understanding of a
										variety of valuation problems.
										<br />
										<br />
										Our philosophy leverages old school in a
										new world: We believe in harnessing the
										best available technology to capture new
										types of data and perform sophisticated
										analytics, but we also firmly believe
										that nothing replaces first-hand
										discussions with market participants and
										old-fashioned shoe leather. This old
										school-new school approach delivers the
										best of both worlds - solid data along
										with an understanding of the context and
										nuance of that data.
									</Header>
									<Segment raised inverted color="red">
										<Header as="h2" textAlign="center">
											From simple to complex assignments, we
											tailor the solution to fit the
											problem.
										</Header>
									</Segment>
								</Segment>
								<Divider />
								<Header as="h1" textAlign="center">
									Runde & Partners, Inc. offers a wide range
									of valuation services:
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Services />
						<Grid.Row columns={1}>
							<Grid.Column>
								<Segment raised inverted color="red">
									<Header as="h2" textAlign="center">
										If you have a real estate valuation
										question or concern, please{" "}
										<Link
											className="contact-link"
											to="/contact"
										>
											Contact Us
										</Link>
									</Header>
								</Segment>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={2}>
							<Grid.Column
								mobile={16}
								tablet={16}
								computer={8}
							>
								<Segment stacked color="red">
									<Image
										rounded
										src="/images/building1.jpg"
									/>
								</Segment>
								<Header
									as="h1"
									color="red"
									textAlign="center"
								>
									Timothy P. Runde, MAI, LEED AP
								</Header>
								<br />
								<Segment raised color="red">
									<Header as="h3" textAlign="center">
										Tim has over 25 years of commercial real
										estate appraisal experience encompassing
										a wide range of property types,
										including commercial office, industrial,
										retail and multi-family assignments. In
										addition, he has developed expertise in
										advanced practice areas including
										condemnation, intangibles, leaseholds,
										and sustainable, green and
										high-performance buildings. He has
										qualified as an expert witness in
										California Superior Court, US Bankruptcy
										Court, as well as a variety of
										arbitration, mediation and property tax
										appeal proceedings.
									</Header>
									<Header as="h3" textAlign="center">
										Tim received a Master of Science in Real
										Estate Appraisal and Investment Analysis
										degree from the University of Wisconsin
										under the direction of Dr. James
										Graaskamp. While studying there, he was
										awarded a Hollander Fellowship with the
										Wisconsin Housing and Economic
										Development Authority and worked as a
										project manager with a national real
										estate developer.
									</Header>
									<Header as="h3" textAlign="center">
										Tim is the co-author the newly released
										Appraisal Institute textbook, The
										Valuation of Green Commercial Real
										Estate. He is also the co-developer of
										the Appraisal Institute course based on
										that textbook Practical Applications in
										Appraising Green Commercial Properties.
										He is an approved instructor, developer
										and course reviewer for the Appraisal
										Institute and has served as a peer
										reviewer for The Appraisal Journal. His
										most recent publications include "Net
										Zero Energy Buildings: An Introduction
										for Valuation Professionals" (The
										Appraisal Journal, 2015) , “Linking
										Sustainable Improvements to Retail Real
										Estate Value” (Real Property Insights,
										2015) and "The Role of Incentives in
										Green Building Valuation" (The Appraisal
										Journal, 2017).
									</Header>
									<Segment raised color="red">
										<Header
											as="h2"
											color="red"
											textAlign="center"
										>
											<a
												href="www.google.com"
												className="pdf-link"
											>
												View Tim Runde's Qualifications{" "}
												<Icon
													size="big"
													color="red"
													name="file pdf outline"
												/>
											</a>
										</Header>
									</Segment>
								</Segment>
							</Grid.Column>
							<Grid.Column
								mobile={16}
								tablet={16}
								computer={8}
							>
								<Segment stacked color="red">
									<Image
										rounded
										src="/images/building1.jpg"
									/>
								</Segment>
								<Header
									as="h1"
									color="red"
									textAlign="center"
								>
									Stacey L. Thoyre, WELL AP, LEED
									<br />
									Green Associate
								</Header>
								<Segment raised color="red">
									<Header as="h3" textAlign="center">
										Stacey is the co-founder of Runde &
										Partners, Inc. She holds an
										undergraduate degree in both Finance and
										Risk Management from the University of
										Wisconsin – Madison and a graduate
										degree in writing from the University of
										San Francisco. Her real estate appraisal
										experience encompasses both commercial
										and residential properties, including
										retail, mixed-use, office, institutional
										and vacant land.
									</Header>
									<Header as="h3" textAlign="center">
										Stacey is the co-author of the Appraisal
										Institute textbook, The Valuation of
										Green Commercial Real Estate, and one of
										the only appraisers who has earned the
										WELL AP designation. This credential
										builds on her prior experience as an
										American College of Sports Medicine
										(ACSM) Certified Exercise Physiologist
										and signifies particular knowledge and
										expertise regarding the health effects
										of the built environment.
									</Header>
									<Header as="h3" textAlign="center">
										In addition, she is the co-developer of
										the new Appraisal Institute course
										Practical Applications in Appraising
										Green Commercial Properties and has
										served as a course reviewer for
										appraisal education related to green
										building and sustainability. Stacey has
										co-authored numerous articles on the
										value effects of green building and has
										presented nationally on the topic of
										sustainability’s impacts on real estate
										valuation.
									</Header>
									<Segment raised color="red">
										<Header
											as="h2"
											color="red"
											textAlign="center"
										>
											<a
												href="www.google.com"
												className="pdf-link"
											>
												View Stacey Thoyre's Qualifications{" "}
												<Icon
													size="big"
													color="red"
													name="file pdf outline"
												/>
											</a>
										</Header>
									</Segment>
								</Segment>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={1}>
							<Grid.Column>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										Tim and Stacey have co-authored the
										following articles:
									</Header>
									<Segment raised color="red">
										<Header as="h3" textAlign="center">
											<a
												href="www.google.com"
												className="pdf-link"
											>
												"The Role of Incentives in Green
												Building Valuation"
											</a>{" "}
											(The Appraisal Journal, Summer 2017)
										</Header>
										<Header as="h3" textAlign="center">
											<a
												href="www.google.com"
												className="pdf-link"
											>
												“Linking Sustainable Improvements to
												Retail Real Estate Value”
											</a>{" "}
											(Real Property Insights, 2015)
										</Header>
										<Header as="h3" textAlign="center">
											<a
												href="www.google.com"
												className="pdf-link"
											>
												“Integrating Sustainability and
												Green Building into the Appraisal
												Process”
											</a>{" "}
											(The Journal of Sustainable Real
											Estate (JOSRE), Volume 2, No. 1, 2010)
										</Header>
									</Segment>
									<Header as="h2" textAlign="center">
										And the following textbook:
									</Header>
									<Segment raised color="green">
										<Header
											as="h1"
											textAlign="center"
											color="green"
										>
											"The Valuation of Green Commercial
											Real Estate"
										</Header>
										<Header as="h1" textAlign="center">
											published by The Appraisal Institute
											2017.
										</Header>
									</Segment>
								</Segment>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		</div>
	);
}

export default About;
