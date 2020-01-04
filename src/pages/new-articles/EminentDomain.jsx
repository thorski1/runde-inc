import React from "react";
import {
	Header,
	Grid,
	Container,
	Image
} from "semantic-ui-react";
import { Sidebar } from "../../components/Sidebar";
import { BottomLinks } from "../../components/BottomLinks";
import { HeaderTitle } from "../../components/HeaderTitle";

export const EminentDomain = () => {
	return (
		<div>
			<Container>
				<Grid columns={2}>
					<Grid.Column
						computer={10}
						tablet={16}
						mobile={16}
					>
						<HeaderTitle title={"Eminent Domain and the Jetson Machine"} />
						<Image rounded src="/images/building1.jpg" />
						<Header as="h3" textAlign="center">
							Let’s face it: Eminent domain is a slow-moving
							vehicle. Don’t get me wrong, it’s a very
							important and nuanced area of real estate
							valuation, and the professionals who work in
							this arena know their stuff. But the new
							developments come along at an evolutionary
							rate, not a revolutionary rate. It’s more like
							punctuated equilibrium than disruptive change.
							So when a big change happens, it’s pretty,
							well, BIG.
						</Header>
						<Header as="h3" textAlign="center">
							We’re at one of those inflection points that
							evolutionary biologists talk about right now.
							Get ready to dot your exclamation point. The
							confluence of demographics (millennials),
							technology (CRE Tech), economics and real
							resource constraints (sustainability) are
							coalescing to create a new market paradigm for
							the role of real estate in society.
						</Header>
						<Header as="h3" textAlign="center">
							As we discussed at the IRWA Chapter 42 Spring
							Conference today, high-performance and green
							buildings reflect a changing market paradigm –
							one that balances the needs of the occupants,
							owners, community, and the environment in a
							very dynamic way. It’s no longer about
							perimeter ego offices and granite lobbies. Try
							equal access to outdoor views, space that
							tells you everyone’s opinion matters, and
							communicates that the employer cares about the
							employees’ well- being – as well as the needs
							of the community and the environment. Because
							market value is what the market values, this
							change in the market is creating real change
							when it comes to the valuation of real estate
							in the 21st century.
						</Header>
						<Header as="h3" textAlign="center">
							Building performance is the new metric. Yes,
							energy efficiency is important, but so is the
							occupant experience. Why? Work-life balance in
							the 21st century is about a seamless
							experience that melds work life with personal
							life, face-to-face experience with on-line
							reality, 24-7 connectivity and personal space.
							Employers (tenants) are looking to their real
							estate as a productivity enhancer. In the
							knowledge economy, the employee cost is 10 -20
							times the rent on a per square foot basis. So
							if your millennial George Jetson makes $100k
							per year and the occupant density is 200
							square feet per employee, your people cost is
							$500 per square foot per year. Even in Silicon
							Valley, that’s at least 10x the annual NNN
							rent. If what you do with your real estate
							allows the 21st-century Mr. Spacely to eke out
							just 1% more in productivity from millennial
							George and his co-workers, that’s $5 per
							square foot (10%) in additional rent potential
							to play with. That’s the real value
							proposition of sustainable, green and
							high-performance real estate.
						</Header>
						<Header as="h3" textAlign="center">
							The savvy tenants get this. Trouble is, the
							kind of properties that enhance productivity
							and have a light environmental footprint may
							not look that much different than conventional
							buildings, particularly to those of us
							non-millennials. Learning how to recognize
							these high-performance/green buildings and how
							to properly value them takes specialized
							education and experience that relatively few
							appraisers have at this point. And that’s a
							big problem, because whether you’re the
							acquiring Agency, or the condemnee, getting
							the value right is critical to a fair,
							defensible just compensation award.
						</Header>
						<Header as="h3" textAlign="center">
							So what do George and Jane Jetson think of all
							of this? Well, if their futuristic net zero
							energy home with biophilic design is in the
							way of the next inter-stellar transit hub,
							they’ll need to make sure they get credit for
							all of their home’s high-performance and green
							features. And the Agency? Well, they’ll need
							to be sure they can parse between George’s
							pie-in-the-sky hopes that his dream home is
							the key to a greener future, and the true fair
							market value reality.
						</Header>
						<Header as="h3" textAlign="center">
							So like it or not, the future has come to
							eminent domain.
						</Header>
						<BottomLinks
							backLink={"below-zero"}
							goBack={"Building Below Zero"}
							forwardLink={"upcoming"}
							goForward={"Upcoming Events"}
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
