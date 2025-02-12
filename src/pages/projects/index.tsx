import { motion } from "framer-motion";

import { MainContainer } from "../../components/MainContainer";
import ProjectCard from "../../components/ProjectCard";
import Section from "../../components/Section";

import cookedfhd from "../../assets/img/cookedfhd.webp";
import photostockfhd from "../../assets/img/photostockfhd.webp";
import stockexchangefhd from "../../assets/img/stockexchangefhd.webp";

import { BackToTopBtn } from "../../components/BackToTopBtn";
import { i18n } from "../../translate/i18n";
import { CardsContainer, MainTitle } from "./styles";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Projects() {
	return (
		<MainContainer>
			<>
				<HelmetProvider>
					<Helmet>
						<title>{`${i18n.t("projectsPageTabTitle")} Bruno de Sá`}</title>
					</Helmet>
				</HelmetProvider>
				<Section>
					<MainTitle>{i18n.t("projectsPage.title")}</MainTitle>
				</Section>
				<Section>
					<CardsContainer
						as={motion.div}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.9 }}
					>
						<ProjectCard
							name={"Cooked"}
							description={i18n.t("projectsPage.coockedDescription")}
							appUrl={"https://cooked.vercel.app/"}
							techs={["React", "TypeScript", "Sass", "HeadlessUi"]}
							imgUrl={cookedfhd}
							repoUrl={"https://github.com/brunovdsa/cooked"}
						/>
						<ProjectCard
							name={"Stock Photos"}
							description={i18n.t("projectsPage.stockPhotosDescription")}
							appUrl={"https://stockphotos.vercel.app/"}
							techs={["React", "styled-components", "Next.js"]}
							imgUrl={photostockfhd}
							repoUrl={"https://github.com/brunovdsa/photoApp"}
						/>
						<ProjectCard
							name={"Stock Exchange"}
							description={i18n.t("projectsPage.stockExchangeDescription")}
							appUrl={"https://stockexchanges.vercel.app/"}
							techs={["React", "TypeScript", "Sass", "GoogleCharts"]}
							imgUrl={stockexchangefhd}
							repoUrl={"https://github.com/brunovdsa/chart"}
						/>
					</CardsContainer>
				</Section>
				<BackToTopBtn />
			</>
		</MainContainer>
	);
}
