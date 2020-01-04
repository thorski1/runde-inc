import React from 'react'
import { Header } from 'semantic-ui-react'

export const ContactInfo = (props) => {
    return (
			<>
				<Header textAlign="center" as="h2">
					{props.name}
				</Header>
				<Header textAlign="center" as="h3">
					{props.phoneNumber}
				</Header>
				<Header textAlign="center" as="h3">
					<a
                    className="email-links"
                    href={`mailto:${props.emailName}@runde-inc.com`}
					>
						{props.emailName}@runde-inc.com
					</a>
				</Header>
			</>
		);
}
