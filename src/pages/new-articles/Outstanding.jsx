import React from 'react'
import {
	Header,
	Grid,
	Container,
	Image
} from "semantic-ui-react";
import { Sidebar } from '../../components/Sidebar';
import { BottomLinks } from '../../components/BottomLinks';
import { HeaderTitle } from '../../components/HeaderTitle';

export const Outstanding = () => {
    return (
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle
							title={
								"Runde Receives Outstanding Service Award"
							}
						/>
						<Image rounded src="/images/building1.jpg" />
						<Header as="h3">
							Timothy P. Runde, MAI, LEED AP of San
							Francisco, was named the recipient of the
							Outstanding Service Award during the 2018
							Appraisal Institute Annual Conference in
							Nashville, Tennessee.
						</Header>
						<Header as="h3">
							The Outstanding Service Award is presented to
							an Appraisal Institute professional who
							contributed ideas, service hours and
							dedication to ensure a program or effort is
							implemented at either the chapter, region,
							national or international level; is
							instrumental in the success of the program or
							effort, which must be far enough along to
							measure and provide proof of success; and the
							program or effort must be beneficial to
							chapters, regions or national or international
							professionals.
						</Header>
						<Header as="h3">
							“Being recognized for contributing to the
							valuation profession’s knowledge base –
							understanding of green building and
							sustainability’s value impacts – is a true
							honor. I am at once humbled by this award and
							reminded of the equal efforts of my partner,
							Stacey Thoyre, WELL AP, LEED Green Associate,
							without whose contribution this award would
							not have been realized,” says Tim. “I have no
							doubt I would not have received this award but
							for the multi-disciplined, world-class real
							estate education I received from “Chief”
							Graaskamp and the Wisconsin program. In
							addition, I credit the education I received at
							Marquette University High School (MUHS) and
							the dedication I witnessed during my years
							there: that advancing the intellect and
							achieving success brought with it the
							responsibility to give back.”
						</Header>
						<BottomLinks
							backLink={"upcoming"}
							goBack={"Upcoming Events"}
							forwardLink={"green-book"}
							goForward={
								"NEW! green valuation book released"
							}
						/>
					</Grid.Column>
					<Grid.Column width={6} only="computer">
						<Sidebar />
					</Grid.Column>
				</Grid>
			</Container>
		);
}
