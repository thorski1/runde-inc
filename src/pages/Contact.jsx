import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import "./Contact.css";

function Contact() {
	return (
		<div>
			<Header as="h1" textAlign="center">
				CONTACT US
				<hr className="underline" />
			</Header>

			<Grid centered columns={2}>
				<Grid.Column>
					<Header
						textAlign="center"
						color="red"
						as="h1"
						attached="top"
					>
						RUNDE & PARTNERS, INC.
					</Header>{" "}
					<Segment attached color="red">
						<Header textAlign="center" as="h3">
							505 Montgomery Street Suite 1034 San
							Francisco, CA 94111
						</Header>{" "}
					</Segment>
					<Segment attached color="red">
						<Grid centered columns={2}>
							<Grid.Column>
								<Segment attached raised>
									<Header textAlign="center" as="h2">
										Tim Runde
									</Header>
									<Header textAlign="center" as="h3">
										(415) 265-9914
									</Header>
									<Header textAlign="center" as="h3">
										<a
											className="email-links"
											href="mailto:tim@runde-inc.com"
										>
											tim@runde-inc.com
										</a>
									</Header>
								</Segment>
								<Segment attached>
									<Header textAlign="center" as="h2">
										Stacey Thoyre
									</Header>
									<Header textAlign="center" as="h3">
										(415) 420-3033
									</Header>
									<Header textAlign="center" as="h3">
										<a
											className="email-links"
											href="mailto:stacey@runde-inc.com"
										>
											stacey@runde-inc.com
										</a>
									</Header>
								</Segment>
							</Grid.Column>
						</Grid>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default Contact;
