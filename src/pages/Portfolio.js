import React from "react";
import {
	Grid,
	Container
} from "semantic-ui-react";

import { HeaderTitle } from "../components/HeaderTitle";
import { PortfolioItem } from "../components/PortfolioItem";

function Portfolio() {
	return (
		<div>
			<HeaderTitle title={"OUR WORK"} />
			<Container>
				<Grid centered>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={10}
							title={"MEDICAL OFFICE: Financing"}
							description={`Included valuation of micro-concentrating solar thermal with absorptive chiller, Danville`}
						/>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={9}
							title={"METREON: Leasehold Interest"}
							description={
								"Retail/Entertainment complex, San Francisco"
							}
						/>
						<PortfolioItem
							computerSize={7}
							title={"MLB BALLPARK: Ad Valorem Tax Appeal"}
							description={"San Francisco"}
						/>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={7}
							title={
								"UNION SQUARE MACYS: Ground Rent Valuation"
							}
							description={"Retail, San Francisco"}
						/>
						<PortfolioItem
							computerSize={9}
							title={
								"TRANSBAY CENTER: Acquisition & Disposition"
							}
							description={
								"Fee & Easement Valuation; Condemnation SoMa, San Francisco"
							}
						/>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={5}
							title={
								"PARC 55 UNION SQUARE HOTEL: Tax Appeal"
							}
							description={
								"Valuation of 1,013-room hotel Real estate + intangibles, San Francisco"
							}
						/>
						<PortfolioItem
							computerSize={5}
							title={
								"SHOPPING CENTER: Overholtzer Valuation"
							}
							description={
								"Analysis of title defect, Manteca"
							}
						/>
						<PortfolioItem
							computerSize={5}
							title={
								"SILICON VALLEY: Sustainable Renovation"
							}
							description={
								"Construction financing for 1980s racquetball court renovated to NZE Office/R&D, Sunnyvale"
							}
						/>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={9}
							title={
								"CURRAN THEATER: Market Rent Appraisal"
							}
							description={
								"Broadway-style theater, San Francisco"
							}
						/>
						<PortfolioItem
							computerSize={7}
							title={
								"NET ZERO ENERGY: Construction Financing"
							}
							description={
								"Educational Training Facility – JATC Renovation of 1980s office/R&D building, San Leandro"
							}
						/>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={7}
							title={"SFO AIRPORT: Ground Lease"}
							description={"Market rent appraisal"}
						/>
						<PortfolioItem
							computerSize={9}
							title={
								"STANFORD RESEARCH PARK: Portfolio Refinance"
							}
							description={"Palo Alto"}
						/>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<PortfolioItem
							computerSize={5}
							title={
								"FISHERMAN’S WHARF: Market Rent Appraisal"
							}
							description={"Retail, San Francisco"}
						/>
						<PortfolioItem
							computerSize={5}
							title={"BIOTECH: Renovation Financing"}
							description={
								"Conversion of office to life sciences/biotech South San Francisco"
							}
						/>
						<PortfolioItem
							computerSize={5}
							title={
								"THE CANNERY: Portfolio Valuation of Post-Secondary Educational Facilities"
							}
							description={
								"Adaptive re-use of historic Del Monte canning facility Fisherman’s Wharf, San Francisco"
							}
						/>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default Portfolio;
