import React from 'react'
import { Grid, Header, Icon, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export const BottomLinks = (props) => {
	return (
		<Container style={{ marginTop: "3rem" }}>
			<Grid celled columns="equal" divided padded stackable>
				<Grid.Row textAlign="center">
					<Grid.Column verticalAlign="middle">
						<Link to={`/latest/${props.backLink}`}>
							<Grid columns={2} stackable>
								<Grid.Row>
									<Grid.Column
										width={2}
										verticalAlign="middle"
									>
										<Icon
											size="large"
											color="grey"
											name="arrow left"
										/>
									</Grid.Column>
									<Grid.Column width={14}>
										<Header color="grey" as="h4">
											{props.goBack}
										</Header>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</Grid.Column>
					<Grid.Column verticalAlign="middle">
						<Link to={`/latest/${props.forwardLink}`}>
							<Grid columns={2} stackable>
								<Grid.Row>
									<Grid.Column width={13}>
										<Header color="grey" as="h4">
											{props.goForward}
										</Header>
									</Grid.Column>
									<Grid.Column
										width={2}
										verticalAlign="middle"
									>
										<Icon
											size="large"
											color="grey"
											name="arrow right"
										/>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}
