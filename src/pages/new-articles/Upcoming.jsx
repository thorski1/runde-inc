import React from "react";
import { Header, Grid, Container, Image } from "semantic-ui-react";
import { Sidebar } from "../../components/Sidebar";
import { BottomLinks } from "../../components/BottomLinks";
import { HeaderTitle } from "../../components/HeaderTitle";

export const Upcoming = () => {
	return (
		<div>
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle title={"Upcoming Events"} />
						<Image rounded src="/images/building1.jpg" />
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							JANUARY 31, 2019 San Diego, CA
						</Header>
						<Header textAlign="center" as="h2">
							TEACHING: "Introduction to Green Buildings"
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							FEBRUARY 11-12, 2019 Tampa, FL
						</Header>
						<Header textAlign="center" as="h2">
							TEACHING: “Practical Applications in
							Appraising Green Commercial Properties”
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							MARCH 8-9, 2019 Fairfield, CA
						</Header>
						<Header textAlign="center" as="h2">
							TEACHING: “Practical Applications in
							Appraising Green Commercial Properties”
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							MARCH 14-15, 2019 Fort Lauderdale, FL
						</Header>
						<Header textAlign="center" as="h2">
							TEACHING: “Practical Applications in
							Appraising Green Commercial Properties”
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							MARCH 15, 2019: Northern California Spring
							Conference, Modesto, CA
						</Header>
						<Header textAlign="center" as="h2">
							SPEAKING: “The New and Re-Sale Housing Market:
							The Future Is Now”
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							MAY 3, 2019: 2019 Northern California REAA-AI
							Residential Appraisal Conference, Fairfield,
							CA
						</Header>
						<Header textAlign="center" as="h2">
							SPEAKING: “Top 10 Need-to-Know for Residential
							Appraisers”
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							JULY 22-24, 2019: Appraisal Institute National
							Conference, Denver, CO
						</Header>
						<Header textAlign="center" as="h2">
							SPEAKING: “Green Market Update: Current
							Demand, Future Outlook”
						</Header>
						<Header textAlign="center" as="h2">
							Join Tim, Stacey and Sandra Adomatis, SRA, to
							get the latest news on green market demand and
							how high-performance metrics are evolving in
							green building
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							AUGUST 19-20, 2019 Salida, CA
						</Header>
						<Header textAlign="center" as="h2">
							TEACHING: “Residential & Commercial Valuation
							of Solar“
						</Header>

						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							SEPTEMBER 27, 2019: Northern California
							Appraisal Institute Fall Conference, South San
							Francisco, CA
						</Header>
						<Header textAlign="center" as="h2">
							SPEAKING: “The 2020 Solar Mandate: New
							Requirements for California”
						</Header>
						<Header
							textAlign="center"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							OCTOBER 23-24, 2019: San Juan, Puerto Rico
						</Header>
						<Header textAlign="center" as="h2">
							TEACHING: “Practical Applications in
							Appraising Green Commercial Properties”
						</Header>
						<Header
							textAlign="center"
							color="red"
							as="h2"
							style={{
								textDecoration: "underline",
								marginBottom: "-1.5rem"
							}}
						>
							VALUING GREEN COMMERCIAL REAL ESTATE BOOK
							RELEASE!
						</Header>
						<Header color="red" textAlign="center" as="h2">
							The Valuation of Green Commercial Real Estate
						</Header>
						<Header as="h3" textAlign="center">
							Appraisal institute has released the "Green
							Book" by Runde & Thoyre - the definitive text
							on the valuation of green commercial real
							estate.
						</Header>
						<BottomLinks
							backLink={"eminent-domain"}
							goBack={
								"Eminent Domain and the Jetson Machine"
							}
							forwardLink={"outstanding"}
							goForward={
								"Runde Receives Outstanding Service Award"
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
