import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import {
	Segment,
	Header,
	Grid,
	Image,
	Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<Segment color="red" style={{marginTop: "3rem"}}>
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="TimRunde"
				options={{ height: 500 }}
			/>
			<Divider />
			<Header as="h2" textAlign="center">
				Recent Posts
			</Header>
			<Divider />
			<Grid columns={2}>
				<Grid.Row>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/upcoming">
							<Image bordered src="/images/building1.jpg" />
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/upcoming">
							<Header as="h3" textAlign="center">
								Upcoming Events
							</Header>
						</Link>
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/outstanding">
							<Image bordered src="/images/building1.jpg" />
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/outstanding">
							<Header
								as="h3"
								color="red"
								className="pdf-link"

								// style={{ marginBottom: "-1.5rem" }}
								textAlign="center"
							>
								Runde Receives Outstanding Service Award
							</Header>
							{/* <Header
								as="h5"
								color="grey"
								textAlign="center"
								style={{ marginBottom: "-1.5rem" }}
							>
								August 30, 2018
							</Header>
							<Header as="h5" textAlign="center">
								Timothy P. Runde, MAI, LEED AP of San...
							</Header> */}
						</Link>
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/green-book">
							<Image bordered src="/images/building1.jpg" />
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/green-book">
							<Header
								as="h3"
								color="red"
								style={{ marginBottom: "-1.5rem" }}
								textAlign="center"
							>
								NEW! Green Valuation Book Released
							</Header>
							<Header
								as="h5"
								color="grey"
								textAlign="center"
								style={{ marginBottom: "-1.5rem" }}
							>
								August 13, 2017
							</Header>
							<Header as="h5" textAlign="center">
								The much anticipated Appraisal Institute
								textbook The Valuation of...
							</Header>
						</Link>
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/well-building">
							<Image bordered src="/images/building1.jpg" />
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/well-building">
							<Header
								as="h3"
								style={{ marginBottom: "-1.5rem" }}
								textAlign="center"
							>
								Runde & Partners becomes first appraisal
								firm with WELL Building Standard & Fitwel
								expertise
							</Header>
							<Header
								as="h5"
								color="grey"
								textAlign="center"
								style={{ marginBottom: "-1.5rem" }}
							>
								August 13, 2017
							</Header>
							<Header as="h5" textAlign="center">
								Runde & Partners, Inc. is pleased to
								congratulate...
							</Header>
						</Link>
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/valuation-magazine">
							<Image bordered src="/images/building1.jpg" />
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/valuation-magazine">
							<Header
								as="h3"
								style={{ marginBottom: "-1.5rem" }}
								textAlign="center"
							>
								Valuation magazine buzz: "For What It's
								Worth"
							</Header>
							<Header
								as="h5"
								color="grey"
								textAlign="center"
								style={{ marginBottom: "-1.5rem" }}
							>
								February 16, 2017
							</Header>
							<Header as="h5" textAlign="center">
								Thank you to Valuation magazine for the
								recent...
							</Header>
						</Link>
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/below-zero">
							<Image bordered src="/images/building1.jpg" />
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle" width={8}>
						<Link to="/latest/below-zero">
							<Header
								as="h3"
								style={{ marginBottom: "-1.5rem" }}
								textAlign="center"
							>
								Building Below Zero
							</Header>
							<Header
								as="h5"
								color="grey"
								textAlign="center"
								style={{ marginBottom: "-1.5rem" }}
							>
								January 1, 2017
							</Header>
							<Header as="h5" textAlign="center">
								It's not often that appraisers find
								themselves in...
							</Header>
						</Link>
					</Grid.Column>
				</Grid.Row>
				<Divider />
			</Grid>
		</Segment>
	);
};
