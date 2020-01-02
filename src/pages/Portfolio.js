import React from "react";
import {
	Grid,
	Image,
	Header,
	Container,
	Segment,
	Modal
} from "semantic-ui-react";

function Portfolio() {
	return (
		<div>
			<Header as="h1" textAlign="center">
				OUR WORK
				<hr className="underline" />
			</Header>
			<Container>
				<Grid centered>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={10}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											MEDICAL OFFICE: Financing
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Included valuation of
											micro-concentrating solar thermal with
											absorptive chiller, Danville
										</Header>
									</Segment>
								}
							>
								<Segment color="red">
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h2" textAlign="center">
										MEDICAL OFFICE: Financing
									</Header>
									<Header as="h4" textAlign="center">
										Included valuation of
										micro-concentrating solar thermal with
										absorptive chiller, Danville
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={9}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											METREON: Leasehold Interest
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Retail/Entertainment complex, San
											Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										METREON: Leasehold Interest
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Retail/Entertainment complex, San
										Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={7}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											MLB BALLPARK: Ad Valorem Tax Appeal
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										MLB BALLPARK: Ad Valorem Tax Appeal
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={7}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											UNION SQUARE MACYS: Ground Rent
											Valuation
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Retail, San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										UNION SQUARE MACYS: Ground Rent
										Valuation
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Retail, San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={9}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											TRANSBAY CENTER: Acquisition &
											Disposition
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Fee & Easement Valuation; Condemnation
											SoMa, San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										TRANSBAY CENTER: Acquisition &
										Disposition
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Fee & Easement Valuation; Condemnation
										SoMa, San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={5}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											PARC 55 UNION SQUARE HOTEL: Tax Appeal
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Valuation of 1,013-room hotel Real
											estate + intangibles, San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										PARC 55 UNION SQUARE HOTEL: Tax Appeal
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Valuation of 1,013-room hotel Real
										estate + intangibles, San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={5}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											SHOPPING CENTER: Overholtzer Valuation
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Analysis of title defect, Manteca
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										SHOPPING CENTER: Overholtzer Valuation
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Analysis of title defect, Manteca
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={5}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											SILICON VALLEY: Sustainable Renovation
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Construction financing for 1980s
											racquetball court renovated to NZE
											Office/R&D, Sunnyvale
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										SILICON VALLEY: Sustainable Renovation
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Construction financing for 1980s
										racquetball court renovated to NZE
										Office/R&D, Sunnyvale
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={9}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											CURRAN THEATER: Market Rent Appraisal
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Broadway-style theater, San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										CURRAN THEATER: Market Rent Appraisal
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Broadway-style theater, San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={7}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											NET ZERO ENERGY: Construction
											Financing
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Educational Training Facility – JATC
											Renovation of 1980s office/R&D
											building, San Leandro
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										NET ZERO ENERGY: Construction Financing
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Educational Training Facility – JATC
										Renovation of 1980s office/R&D building,
										San Leandro
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={7}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											SFO AIRPORT: Ground Lease
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Market rent appraisal
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										SFO AIRPORT: Ground Lease
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Market rent appraisal
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={9}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											STANFORD RESEARCH PARK: Portfolio
											Refinance
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Palo Alto
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										STANFORD RESEARCH PARK: Portfolio
										Refinance
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Palo Alto
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={5}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											FISHERMAN’S WHARF: Market Rent
											Appraisal
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Retail, San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										FISHERMAN’S WHARF: Market Rent Appraisal
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Retail, San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={5}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											BIOTECH: Renovation Financing
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Conversion of office to life
											sciences/biotech South San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										BIOTECH: Renovation Financing
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Conversion of office to life
										sciences/biotech South San Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
						<Grid.Column
							mobile={16}
							tablet={16}
							computer={5}
						>
							<Modal
								trigger={
									<Segment
										className="pointer"
										raised
										color="red"
									>
										<Header as="h2" textAlign="center">
											THE CANNERY: Portfolio Valuation of
											Post-Secondary Educational Facilities
										</Header>
										<Image
											rounded
											src="/images/building1.jpg"
										/>
										<Header as="h4" textAlign="center">
											Adaptive re-use of historic Del Monte
											canning facility Fisherman’s Wharf,
											San Francisco
										</Header>
									</Segment>
								}
							>
								<Segment raised color="red">
									<Header as="h2" textAlign="center">
										THE CANNERY: Portfolio Valuation of
										Post-Secondary Educational Facilities
									</Header>
									<Image
										centered
										size="huge"
										rounded
										src="/images/building1.jpg"
									/>
									<Header as="h4" textAlign="center">
										Adaptive re-use of historic Del Monte
										canning facility Fisherman’s Wharf, San
										Francisco
									</Header>
								</Segment>
							</Modal>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default Portfolio;
