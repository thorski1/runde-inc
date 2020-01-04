import React from "react";
import {
	Header,
	Grid,
	Container,
    Image,
    Icon
} from "semantic-ui-react";
import { Sidebar } from "../../components/Sidebar";
import { BottomLinks } from "../../components/BottomLinks";
import { HeaderTitle } from "../../components/HeaderTitle";

export const ValuationMagazine = () => {
	return (
		<div>
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle title={`Valuation magazine buzz: "For What It's Worth"`} />
						<Image rounded src="/images/building1.jpg" />
						<Header as="h3">
							Thank you to Valuation magazine for the recent
							“For What It’s Worth” article interviewing Tim
							Runde about the effect of green building and
							sustainability on the valuation process. This
							issue also has some very good insights and
							commentary from the Appraisal Institute
							leadership about the importance of appraisers
							increasing their knowledge and competency
							regarding green building.
						</Header>
						<Header as="h3">
							Click here for more on how green building
							affects commercial appraisals.{" "}
							<Icon
								size="big"
								color="red"
								name="file pdf outline"
							/>
						</Header>
						<BottomLinks
							backLink={"well-building"}
							goBack={
								"Runde & Partners becomes first appraisal firmm with WELL Building Standard & Fitwel expertise"
							}
							forwardLink={"below-zero"}
							goForward={"Building Below Zero"}
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
