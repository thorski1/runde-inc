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

export const GreenBook = () => {
	return (
		<div>
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle title={"NEW! Green valuation book released"} />
						<Image rounded src="/images/building1.jpg" />
						<Header as="h3">
							The much anticipated Appraisal Institute
							textbook The Valuation of Green Commercial
							Real Estate, co-authored by Runde & Partners
							principals Timothy P. Runde, MAI, LEED AP and
							Stacey L. Thoyre, WELL AP, LEED Green
							Associate, is now available here. It is the
							first real estate valuation textbook devoted
							solely to the valuation of green commercial
							buildings, conventional buildings with green
							features, and commercial properties of all
							types impacted by sustainability. Three years
							in development, this comprehensive resource is
							a must-have for any commercial appraiser
							practicing in today’s markets where
							sustainability and green building influences
							are ubiquitous, yet the valuation impact may
							not be clear. The text uses numerous case
							study examples to illustrate the application
							of existing valuation theory to address
							potential green building value impacts in a
							variety of valuation contexts. Special
							features include the Green Feature Gallery,
							which provides the reader with close-up
							photographs of common green features to help
							them expand their visual data base, complete
							with descriptions of the how, why and
							potential value implication. This text will be
							an invaluable resource to all valuation
							professionals, as well as investors, asset
							managers, property managers, brokers, lawyers,
							architects, designers and engineers.
						</Header>
						<BottomLinks
							backLink={"outstanding"}
							goBack={
								"Runde Receives Outstanding Service Award"
							}
							forwardLink={"well-building"}
							goForward={
								"Runde & Partners becomes first appraisal firm with WELL Building Standard & Fitwel expertise"
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
