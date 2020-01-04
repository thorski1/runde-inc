import React from 'react'
import {
	Grid,
	Icon,
    List,
    Header
} from "semantic-ui-react";

const Services = () => {
    return (
			<Grid.Row centered columns={3}>
				<Grid.Column
					textAlign="center"
					computer={5}
					tablet={5}
					mobile={16}
					style={{ marginBottom: "3rem" }}
				>
					<Icon
						circular
						size="huge"
						color="red"
						name="university"
					/>
					<Header as="h2">APPRAISAL</Header>
					<br />
					<Header as="h3">
						Runde & Partners, Inc. provides real estate
						consulting services in the San Francisco Bay
						Area for lenders, government agencies, law
						firms, real estate developers and individuals.
					</Header>
					<Header as="h3" color="red">
						<List bulleted>
							<List.Item>
								Fair Market Rent Determination
							</List.Item>
							<List.Item>Estate Valuation</List.Item>
							<List.Item>
								Acquisition & Development Financing
							</List.Item>
							<List.Item>Financial Reporting</List.Item>
							<List.Item>Purchase and Sale</List.Item>
							<List.Item>Refinancing</List.Item>
						</List>
					</Header>
				</Grid.Column>
				<Grid.Column
					textAlign="center"
					computer={5}
					tablet={5}
					mobile={16}
					style={{ marginBottom: "3rem" }}
				>
					<Icon
						circular
						size="huge"
						color="red"
						name="balance"
					/>
					<Header as="h2">LITIGATION & TAX APPEAL</Header>
					<br />
					<Header as="h3">
						We offer a wide range of litigation support
						services including expert witness testimony,
						arbitration, mediation and ad valorem valuation
						advisory.
					</Header>
					<Header as="h3" color="red">
						<List bulleted>
							<List.Item>
								Eminent Domain & Condemnation
							</List.Item>
							<List.Item>
								Title Defects (Overholtzer)
							</List.Item>
							<List.Item>Bankruptcy</List.Item>
							<List.Item>Ad Valorem Tax Appeal</List.Item>
							<List.Item>
								Expert Witness Testimony
							</List.Item>
							<List.Item>Arbitration & Mediation</List.Item>
						</List>
					</Header>
				</Grid.Column>
				<Grid.Column
					textAlign="center"
					computer={5}
					tablet={5}
					mobile={16}
					style={{ marginBottom: "3rem" }}
				>
					<Icon
						circular
						size="huge"
						color="red"
						name="pagelines"
					/>
					<Header as="h2">
						SUSTAINABILITY & GREEN BUILDING
					</Header>
					<Header as="h3">
						Runde & Partners, Inc. brings nationally
						recognized expertise to the value effects of
						sustainability and green building on both green
						and conventional properties.
					</Header>
					<Header as="h3" color="red">
						<List bulleted>
							<List.Item>Solar PV</List.Item>
							<List.Item>Net Zero Energy (NZE)</List.Item>
							<List.Item>Green Leases</List.Item>
							<List.Item>
								Sustainable Renovation Financing
							</List.Item>
						</List>
					</Header>
				</Grid.Column>
			</Grid.Row>
		);
}

export default Services