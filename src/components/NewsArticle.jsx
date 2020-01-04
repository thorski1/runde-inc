import React from 'react'
import { Grid, Segment, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export const NewsArticle = (props) => {
    return (
			<Grid.Column
				mobile={16}
				tablet={16}
				computer={8}
				style={{ marginBottom: "3rem" }}
			>
				<Link to={`latest/${props.parameter}`}>
					<Segment color="red" raised>
						<Image rounded src={props.image} />
						<Header as="h1" textAlign="center" color="red">
							{props.title}
						</Header>
						{props.children}
					</Segment>
				</Link>
			</Grid.Column>
		);
}
