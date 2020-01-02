import React from "react";
import {
	Grid,
	Image,
	Container,
	Segment,
	Header
} from "semantic-ui-react";
import {
	useRouteMatch,
	Link
} from "react-router-dom";

function LatestNews() {
	let { url } = useRouteMatch();
	return (
		<div>
			<Header as="h1" textAlign="center">
				LATEST NEWS
				<hr className="underline" />
			</Header>
			<Container>
				<Grid>
					<Grid.Row centered columns={2}>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/upcoming`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										Upcoming Events
									</Header>
									<Header as="h3">
										Upcoming Events - January 31st, 2019 San
										Diego, CA
									</Header>
									<Header as="h3">
										TEACHING: "Introduction to Green
										Buildings"
									</Header>
									<Header
										as="h3"
										className="bottom-padding"
									>
										February 11-12, 2019 Tampa, FL
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/outstanding`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										Runde Receives Outstanding Service Award
									</Header>
									<Header as="h3">
										Timothy P. Runde, MAI, LEED AP of San
										Francisco, was named the recipient of
										the Outstanding Service Award during
										the...
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/green-book`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										NEW! Green valuation book released
									</Header>
									<Header as="h3">
										The much anticipated Appraisal Institute
										textbook The Valuation of Green
										Commercial Real Estate, co-authored by
										Runde & Partners principals Timothy P.
										Runde...
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/well-building`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										Runde & Partners becomes first appraisal
										firm with WELL Building Standard &
										Fitwel expertise
									</Header>
									<Header as="h3">
										Runde & Partners, Inc. is pleased to
										congratulate Stacey L. Thoyre for
										attaining the WELL AP credential. This
										credential denotes...
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/valuation-magazine`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										Valuation magazine buzz: “For What It’s
										Worth”
									</Header>
									<Header as="h3">
										Thank you to Valuation magazine for the
										recent “For What It’s Worth” article
										interviewing Tim Runde about the effect
										of green building...
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/below-zero`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										Building Below Zero
									</Header>
									<Header as="h3">
										It’s not often that appraisers find
										themselves in the news… even
										tangentially. Late last year, Runde &
										Partners, Inc. provided...
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={8}
							style={{ marginBottom: "3rem" }}
						>
							<Link to={`${url}/eminent-domain`}>
								<Segment color="red" raised>
									<Image
										rounded
										src="/images/building1.jpg"
									/>
									<Header
										as="h1"
										textAlign="center"
										color="red"
									>
										Eminent Domain and the Jetson Machine
									</Header>
									<Header as="h3">
										Let’s face it: Eminent domain is a
										slow-moving vehicle. Don’t get me wrong,
										it’s a very important and nuanced
										area...
									</Header>
								</Segment>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default LatestNews;
