import React from "react";
import { Grid, Header, Segment, Divider } from "semantic-ui-react";
import { HeaderTitle } from "../components/HeaderTitle";
import { ContactInfo } from "../components/ContactInfo";

function Contact() {
	return (
		<div>
			<HeaderTitle title={"CONTACT US"} />
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
						<Grid centered columns={1}>
							<Grid.Column>
								<ContactInfo name={"Tim Runde"} phoneNumber={"(415) 265-9914"} emailName={"tim"} />
								<Divider />
								<ContactInfo name={"Stacey Thoyre"} phoneNumber={"(415) 420-3033"} emailName={"stacey"} />
							</Grid.Column>
						</Grid>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default Contact;
