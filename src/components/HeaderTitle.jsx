import React from "react";
import { Header } from "semantic-ui-react";

export const HeaderTitle = (props) => {
	return (
		<Header as="h1" textAlign="center" style={{marginTop: "3rem"}}>
			{props.title}
			<hr className="underline" />
		</Header>
	);
};
