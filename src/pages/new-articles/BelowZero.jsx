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

export const BelowZero = () => {
	return (
		<div>
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle title={"Building Below Zero"} />
						<Image rounded src="/images/building1.jpg" />
						<Header as="h3">
							It’s not often that appraisers find themselves
							in the news… even tangentially. Late last
							year, Runde & Partners, Inc. provided the
							construction financing appraisal for this
							141,00 sq.ft. NZE/NZP w/microgrid & 600 kW PV
							in L.A. This project represents the largest
							NZE retrofit ever and was the subject of a
							recent documentary by PBS with Ted Danson
							called Building Below Zero: The Net-Zero Plus
							Transformation. Projects like this stretch the
							bounds of what is possible today in
							construction and lead the way for other
							projects.
						</Header>
						<Header as="h3">
							Click here to see for yourself!
						</Header>
						<BottomLinks
							backLink={"valuation-magazine"}
							goBack={
								"Valuation magazine buzz: 'For What It's Worth'"
							}
							forwardLink={"eminent-domain"}
							goForward={
								"Eminent Domain and the Jetson Machine"
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
