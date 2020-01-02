import React from "react";
import {
	Grid,
	Header,
	Button,
	Container,
	Image
} from "semantic-ui-react";
import Services from "../components/Services";

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

				<Header as="h1" textAlign="center">
					OUR SERVICES
					<hr className="underline" />
				</Header>
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
												<Header textAlign="center" as="h2">
													Who we are
												</Header>
												<Button
													basic
													color="red"
													size="huge"
													content="ABOUT US"
												/>
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
												<Header textAlign="center" as="h2">
													What we do
												</Header>
												<Button
													basic
													color="red"
													size="huge"
													content="OUR WORK"
												/>
											</div>
										</Container>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</div>
					</Grid.Column>
				</Grid.Row>
				<Container>
					<Header as="h1" textAlign="center">
						LATEST NEWS
						<hr className="underline" />
					</Header>
					<Grid>
						<Grid.Row centered columns={2}>
							<Grid.Column
								mobile={16}
								tablet={8}
								computer={8}
							>
								<Image src="/images/building1.jpg" />
								<Header
									textAlign="center"
									as="h2"
									color="red"
								>
									Upcoming Events
								</Header>
								<Header textAlign="center" as="h3">
									JANUARY 31, 2019 - San Diego, CA
								</Header>
								<Header textAlign="center" as="h3">
									TEACHING: "Introduction to Green
									Buildings"
								</Header>
							</Grid.Column>
							<Grid.Column
								mobile={16}
								tablet={8}
								computer={8}
							>
								<Image src="/images/building1.jpg" />
								<Header
									textAlign="center"
									as="h2"
									color="red"
								>
									Runde Receives Outstanding Service Award
								</Header>
								<Header textAlign="center" as="h3">
									Timothy P. Runde, MAI, LEED AP of San
									Francisco, was named the recipient of the
									Outstanding Service Award during the...
								</Header>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row centered columns={2}>
							<Grid.Column
								mobile={16}
								tablet={8}
								computer={8}
							>
								<Image src="/images/building1.jpg" />
								<Header
									textAlign="center"
									as="h2"
									color="red"
								>
									NEW! Green Valuation Book Released
								</Header>
								<Header textAlign="center" as="h3">
									The much anticipated Appraisal Institute
									textbook The Valuation of Green Commercial
									Real Estate, co-authored by Runde &
									Partners Timothy P. Runde...
								</Header>
							</Grid.Column>
							<Grid.Column
								mobile={16}
								tablet={8}
								computer={8}
							>
								<Image src="/images/building1.jpg" />
								<Header
									textAlign="center"
									as="h2"
									color="red"
								>
									Runde & Partners becomes first appraisal
									firm with WELL Building Standard & Fitwel
									expertise
								</Header>
								<Header textAlign="center" as="h3">
									Runde & Partners, Inc. is pleased to
									congratulate Stacey L. Thoyre for
									attaining the WELL AP credential. This
									credential denotes...
								</Header>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Grid>
		</div>
	);
}

export default Home;
