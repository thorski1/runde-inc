import React from "react";
import { Grid, Header, Container, Button } from "semantic-ui-react";
import Services from "../components/Services";
import { HeaderTitle } from "../components/HeaderTitle";
import { NewsArticle } from "../components/NewsArticle";
import { ImageButtonContainer } from "../components/ImageButtonContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
	return (
		<div>
			<Grid centered>
				<Grid.Row centered columns={1}>
					<Grid.Column>
						{/* <div className="hero">
								<h1 className="main-title" style={{textAlign: "center"}}>
									Runde & Partners, Inc.
									<hr className="underline" />
								</h1>
						</div> */}
						<Carousel
							autoPlay={true}
							showThumbs={false}
							infiniteLoop={true}
							interval={5000}
							showStatus={false}
							stopOnHover={false}
						>
							<div className="hero">
								<img
									src="images/goldengatebridge.JPG"
									alt="building"
								/>
								<Container>
									<h1 className="main-title">
										Runde & Partners, Inc.
										<hr className="underline" />
									</h1>
									<h2 className="subtitle">
										Real Estate Valuation and Consulting
									</h2>
									<Button
										className="button-title"
										size="huge"
										color="red"
										content="OUR SERVICES"
									/>
								</Container>
							</div>
							<div className="hero">
								<img
									src="images/oldcar.jpg"
									alt="building"
								/>
								<h1 className="main-title">
									Expertise
									<hr className="underline" />
								</h1>
								<h2 className="subtitle">
									Valuation | Litigation | Tax Appeal |
									Green Building
								</h2>
								<Button
									className="button-title"
									size="huge"
									color="red"
									content="OUR SERVICES"
								/>
							</div>
							<div className="hero">
								<img
									src="images/oldtime.jpg"
									alt="building"
								/>
								<h1 className="main-title">
									Market Knowledge
									<hr className="underline" />
								</h1>
								<h2 className="subtitle">
									Knowing More Than Just Data Points
								</h2>
								<Button
									className="button-title"
									size="huge"
									color="red"
									content="OUR SERVICES"
								/>
							</div>
							<div className="hero">
								<img
									src="images/butterfly.jpg"
									alt="building"
								/>
								<h1 className="main-title">
									Focused Solutions
									<hr className="underline" />
								</h1>
								<h2 className="subtitle">
									Tailored to Your Needs
								</h2>
								<Button
									className="button-title"
									size="huge"
									color="red"
									content="OUR SERVICES"
								/>
							</div>
							<div className="hero">
								<img
									src="images/hilltower.jpg"
									alt="building"
								/>
								<h1 className="main-title">
									Experience
									<hr className="underline" />
								</h1>
								<h2 className="subtitle">
									Depth of Knowledge | Breadth of
									Understanding
								</h2>
								<Button
									className="button-title"
									size="huge"
									color="red"
									content="OUR SERVICES"
								/>
							</div>
						</Carousel>
					</Grid.Column>
				</Grid.Row>
				<HeaderTitle title={"OUR SERVICES"} />
				<Services />
				<Grid.Row>
					<Grid.Column>
						<div className="about-homepage">
							<Grid centered>
								<Grid.Row>
									<h1 className="main-title">
										ABOUT
										<hr className="underline" />
									</h1>
								</Grid.Row>
								<Grid.Row centered columns={2}>
									<ImageButtonContainer
										title="Who we are"
										buttonContent="ABOUT US"
									/>
									<ImageButtonContainer
										title="What we do"
										buttonContent="OUR WORK"
									/>
								</Grid.Row>
							</Grid>
						</div>
					</Grid.Column>
				</Grid.Row>
				<Container>
					<HeaderTitle title="LATEST NEWS" />
					<Grid>
						<Grid.Row centered columns={2}>
							<NewsArticle
								parameter="upcoming"
								image="/images/building1.jpg"
								title="Upcoming Events"
							>
								<Header as="h3" textAlign="center">
									Upcoming Events - January 31st, 2019 San
									Diego, CA
								</Header>
								<Header as="h3" textAlign="center">
									TEACHING: "Introduction to Green
									Buildings"
								</Header>
								<Header
									as="h3"
									className="bottom-padding"
									textAlign="center"
								>
									February 11-12, 2019 Tampa, FL
								</Header>
							</NewsArticle>
							<NewsArticle
								parameter="outstanding"
								image="/images/building1.jpg"
								title="Runde Receives Outstanding Service Award"
							>
								<Header as="h3">
									Timothy P. Runde, MAI, LEED AP of San
									Francisco, was named the recipient of the
									Outstanding Service Award during the...
								</Header>
							</NewsArticle>
						</Grid.Row>
						<Grid.Row centered columns={2}>
							<NewsArticle
								parameter="green-book"
								image="/images/building1.jpg"
								title="NEW! Green valuation book released"
							>
								<Header as="h3">
									The much anticipated Appraisal Institute
									textbook The Valuation of Green Commercial
									Real Estate, co-authored by Runde &
									Partners principals Timothy P. Runde...
								</Header>
							</NewsArticle>
							<NewsArticle
								parameter="well-building"
								image="/images/building1.jpg"
								title="Runde & Partners becomes first appraisal firm with WELL Building Standard & Fitwel expertise"
							>
								<Header as="h3">
									Runde & Partners, Inc. is pleased to
									congratulate Stacey L. Thoyre for
									attaining the WELL AP credential. This
									credential denotes...
								</Header>
							</NewsArticle>
						</Grid.Row>
					</Grid>
				</Container>
			</Grid>
		</div>
	);
}

export default Home;
