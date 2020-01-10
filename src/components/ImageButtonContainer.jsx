import React from 'react'
import { Grid, Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const ImageButtonContainer = (props) => {
    return (
			<Grid.Column mobile={16} tablet={8} computer={8}>
				<Container>
					<div className="about-divs">
						<Header
							textAlign="center"
							as="h2"
							style={{ color: "white" }}
						>
							{props.title}
						</Header>
						<Link to="/about">
							<Button
								basic
								color="red"
								size="huge"
								content={props.buttonContent}
							/>
						</Link>
					</div>
				</Container>
			</Grid.Column>
		);
}
