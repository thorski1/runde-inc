import React from "react";
import {
	Grid,
	Container,
	Header
} from "semantic-ui-react";
import { HeaderTitle } from "../components/HeaderTitle";
import { NewsArticle } from "../components/NewsArticle";

function LatestNews() {
	return (
		<div>
			<HeaderTitle title={"LATEST NEWS"} />
			<Container>
				<Grid>
					<Grid.Row centered columns={2}>
						<NewsArticle
							parameter="upcoming"
							image="/images/building1.jpg"
							title="Upcoming Events"
						>
							<Header as="h3" textAlign="center">
								Upcoming Events - January 31st, 2019 San
								Diego, CA
							</Header>
							<Header as="h3" textAlign="center">
								TEACHING: "Introduction to Green Buildings"
							</Header>
							<Header
								as="h3"
								className="bottom-padding"
								textAlign="center"
							>
								February 11-12, 2019 Tampa, FL
							</Header>
						</NewsArticle>
						<NewsArticle
							parameter="outstanding"
							image="/images/building1.jpg"
							title="Runde Receives Outstanding Service Award"
						>
							<Header as="h3">
								Timothy P. Runde, MAI, LEED AP of San
								Francisco, was named the recipient of the
								Outstanding Service Award during the...
							</Header>
						</NewsArticle>
						<NewsArticle
							parameter="green-book"
							image="/images/building1.jpg"
							title="NEW! Green valuation book released"
						>
							<Header as="h3">
								The much anticipated Appraisal Institute
								textbook The Valuation of Green Commercial
								Real Estate, co-authored by Runde & Partners
								principals Timothy P. Runde...
							</Header>
						</NewsArticle>
						<NewsArticle
							parameter="well-building"
							image="/images/building1.jpg"
							title="Runde & Partners becomes first appraisal firm with WELL Building Standard & Fitwel expertise"
						>
							<Header as="h3">
								Runde & Partners, Inc. is pleased to
								congratulate Stacey L. Thoyre for attaining
								the WELL AP credential. This credential
								denotes...
							</Header>
						</NewsArticle>
						<NewsArticle
							parameter="valuation-magazine"
							image="/images/building1.jpg"
							title={`Valuation magazine buzz: “For What It’s Worth”`}
						>
							<Header as="h3">
								Thank you to Valuation magazine for the
								recent “For What It’s Worth” article
								interviewing Tim Runde about the effect of
								green building...
							</Header>
						</NewsArticle>
						<NewsArticle
							parameter="below-zero"
							image="/images/building1.jpg"
							title="Building Below Zero"
						>
							<Header as="h3">
								It’s not often that appraisers find
								themselves in the news… even tangentially.
								Late last year, Runde & Partners, Inc.
								provided...
							</Header>
						</NewsArticle>
						<NewsArticle
							parameter="eminent-domain"
							image="/images/building1.jpg"
							title="Eminent Domain and the Jetson Machine"
						>
							<Header as="h3">
								Let’s face it: Eminent domain is a
								slow-moving vehicle. Don’t get me wrong,
								it’s a very important and nuanced area...
							</Header>
						</NewsArticle>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default LatestNews;
