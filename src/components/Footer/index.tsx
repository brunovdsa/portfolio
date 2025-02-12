import { ChooseLanguage, Container, LinksContainer } from "./styles";

import { GitHubIcon, LinkedinIcon, WppIcon } from "../Icons";
import { Link } from "react-router-dom";
import { ChooseLanguageBar } from "../ChooseLanguageBar";
import { useState } from "react";

export function Footer() {
	return (
		<Container>
			<ChooseLanguage>
				<ChooseLanguageBar />
			</ChooseLanguage>
			<LinksContainer>
				<Link to={"https://github.com/brunovdsa"}>
					<GitHubIcon />
				</Link>
				<Link to={"https://www.linkedin.com/in/brunovdsa/"}>
					<LinkedinIcon />
				</Link>
				<Link to={"https://wa.me/5547999054703"}>
					<WppIcon />
				</Link>
			</LinksContainer>
		</Container>
	);
}
