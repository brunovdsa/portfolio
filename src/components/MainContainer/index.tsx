import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "../../utils/usePersistedState";

import { Header } from "../Header";

import dark from "../../theme/dark";
import light from "../../theme/light";
import GlobalStyle from "../../assets/styles/global";

import { Container, Page } from "./styles";
import { Footer } from "../Footer";
import { JSX } from "react";

interface MainContainerProps {
	children: JSX.Element;

	style?: React.CSSProperties;
}
export function MainContainer(props: MainContainerProps) {
	const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

	const toggleTheme = () => {
		setTheme(theme.title === "dark" ? light : dark);
	};

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} theme={theme} />
				<Page>{props.children}</Page>
				<Footer />
			</Container>
		</ThemeProvider>
	);
}
