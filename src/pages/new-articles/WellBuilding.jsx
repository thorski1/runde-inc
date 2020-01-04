import React from "react";
import {
	Header,
	Grid,
	Container,
	Image
} from "semantic-ui-react";
import { Sidebar } from "../../components/Sidebar";
import { BottomLinks } from "../../components/BottomLinks";
import { HeaderTitle } from "../../components/HeaderTitle";

export const WellBuilding = () => {
	return (
		<div>
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle
							title={`Runde & Partners becomes first appraisal firm
							with WELL Building Standard & Fitwel expertise
							`}
						/>
						<Image rounded src="/images/building1.jpg" />
						<Header as="h3">
							Runde & Partners, Inc. is pleased to
							congratulate Stacey L. Thoyre for attaining
							the WELL AP credential. This credential
							denotes expertise with the WELL Building
							Standard and builds on Stacey’s prior
							knowledge and experience as an American
							College of Sports Medicine (ACSM) Certified
							Exercise Physiologist. The WELL Building
							Standard is a performance-based building
							rating system that uses a scientific,
							evidence-based approach to assessing the
							health, productivity and well-being
							characteristics of both green and conventional
							buildings.
						</Header>
						<Header as="h3">
							Stacey is also a Fitwel Ambassador, indicating
							further knowledge of the evidence-based
							connection between the built environment and
							human health and the specifics of attaining
							Fitwel certification.
						</Header>
						<Header as="h3">
							With this new expertise, Runde & Partners
							continues its tradition of exploring the
							cutting edge issues affecting the valuation of
							real property of all types, and moving the
							goal posts for leadership in real property
							valuation.
						</Header>
						<BottomLinks
							backLink={"green-book"}
							goBack={"NEW! Green valuation book released"}
							forwardLink={"valuation-magazine"}
							goForward={
								"Valuation magazine buzz: 'For What It's Worth'"
							}
						/>
					</Grid.Column>
					<Grid.Column width={6} only="computer">
						<Sidebar />
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	);
};
