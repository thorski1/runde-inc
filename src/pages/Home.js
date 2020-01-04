import React from "react";
import {
	Grid,
	Header,
	Button,
	Container
} from "semantic-ui-react";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import { HeaderTitle } from "../components/HeaderTitle";
import { NewsArticle } from "../components/NewsArticle";

function Home() {
	return (
		<div>
			<Grid centered>
				<Grid.Row centered columns={1}>
					<Grid.Column>
						<div className="hero">
							<h1 className="main-title">
								Runde & Partners, Inc.
								<hr className="underline" />
							</h1>
						</div>
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
									<Grid.Column
										mobile={16}
										tablet={8}
										computer={8}
									>
										<Container>
											<div className="about-divs">
												<Header
													textAlign="center"
													as="h2"
													style={{ color: "white" }}
												>
													Who we are
												</Header>
												<Link to="/about">
													<Button
														basic
														color="red"
														size="huge"
														content="ABOUT US"
													/>
												</Link>
											</div>
										</Container>
									</Grid.Column>
									<Grid.Column
										mobile={16}
										tablet={8}
										computer={8}
									>
										<Container>
											<div className="about-divs">
												<Header
													style={{ color: "white" }}
													textAlign="center"
													as="h2"
												>
													What we do
												</Header>
												<Link to="/portfolio">
													<Button
														basic
														color="red"
														size="huge"
														content="OUR WORK"
													/>
												</Link>
											</div>
										</Container>
									</Grid.Column>
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
