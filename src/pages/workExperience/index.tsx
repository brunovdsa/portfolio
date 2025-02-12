import { motion } from "framer-motion";
// import {  } from "react-helmet";
import { BackToTopBtn } from "../../components/BackToTopBtn";
import ExperienceCard from "../../components/ExperienceCard";
import { MainContainer } from "../../components/MainContainer";
import { i18n } from "../../translate/i18n";
import { CardsContainer, Container, Title } from "./styles";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function WorkExperience() {
	const experiences: any[] = Object.values(
		i18n.t("experiencePage.companys", {
			returnObjects: true,
		})
	);

	return (
		<MainContainer>
			<Container>
				<HelmetProvider>
					<Helmet>
						<title>{`${i18n.t("experienceTabTitle")} Bruno de Sá`}</title>
					</Helmet>
				</HelmetProvider>
				<Title>{i18n.t("experiencePage.title")}</Title>

				<CardsContainer
					as={motion.div}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					{experiences.map((exp, index) => (
						<ExperienceCard
							key={index}
							company={exp.company}
							jobTitle={exp.jobTitle}
							years={exp.years}
							description={exp.description}
							techs={exp.techs}
						/>
					))}
				</CardsContainer>
				<BackToTopBtn />
			</Container>
		</MainContainer>
	);
}
