import React, { useState } from "react";
import "./NavBar.css";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const [activeItem, setActiveItem] = useState("");
	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<Menu
			stackable
			pointing
			inverted
			secondary
			size="massive"
			style={{marginBottom: "-2rem"}}
		>
			<Menu.Item
				position="right"
				name="Home"
				active={activeItem === "Home"}
				onClick={handleItemClick}
			>
				<Link to="/">Home</Link>
			</Menu.Item>

			<Menu.Item
				name="About"
				active={activeItem === "About"}
				onClick={handleItemClick}
			>
				<Link to="/about">About</Link>
			</Menu.Item>

			<Menu.Item
				name="Portfolio"
				active={activeItem === "Portfolio"}
				onClick={handleItemClick}
			>
				<Link to="/portfolio">Portfolio</Link>
			</Menu.Item>

			<Menu.Item
				name="LatestNews"
				active={activeItem === "LatestNews"}
				onClick={handleItemClick}
			>
				<Link to="/latest">Latest News</Link>
			</Menu.Item>

			<Menu.Item
				name="Contact"
				active={activeItem === "Contact"}
				onClick={handleItemClick}
			>
				<Link to="/contact">Contact Us</Link>
			</Menu.Item>
		</Menu>
	);
}
