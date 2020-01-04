import React from 'react'
import { Grid, Modal, Segment, Header, Image } from 'semantic-ui-react'

export const PortfolioItem = (props) => {
    return (
			<Grid.Column
				style={{ marginBottom: "3rem" }}
				mobile={16}
				tablet={16}
				computer={props.computerSize}
			>
				<Modal
					trigger={
						<Segment className="pointer" raised color="red">
							<Header as="h2" textAlign="center">
								{props.title}
							</Header>
							<Image rounded src="/images/building1.jpg" />
							<Header as="h4" textAlign="center">
								{props.description}
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
							{props.title}
						</Header>
						<Header as="h4" textAlign="center">
							{props.description}
						</Header>
					</Segment>
				</Modal>
			</Grid.Column>
		);
}
