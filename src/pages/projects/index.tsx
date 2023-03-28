import { motion } from 'framer-motion';

import Section from '../../components/Section';
import ProjectCard from '../../components/ProjectCard';
import { MainContainer } from '../../components/MainContainer';

import cooked from '../../assets/img/cooked.png';
import cookedfhd from '../../assets/img/cookedfhd.png';
import photostock from '../../assets/img/photostock.png';
import photostockfhd from '../../assets/img/photostockfhd.png';
import stockexchange from '../../assets/img/stockexchange.png';
import stockexchangefhd from '../../assets/img/stockexchangefhd.png';

import { CardsContainer, MainTitle } from './styles';

export default function Projects() {
  return (
    <MainContainer>
      <>
        <Section>
          <MainTitle>A selection of my favorite works.</MainTitle>
        </Section>
        <Section>
          <CardsContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <ProjectCard
              name={'Cooked'}
              description={
                'Cooked is a recipe website, that allows you to search, and find out how your favorite recipe is done.'
              }
              appUrl={'https://cooked.vercel.app/'}
              techs={['React', 'TypeScript', 'Sass', 'HeadlessUi']}
              imgUrl={cookedfhd}
              repoUrl={'https://github.com/brunovdsa/cooked'}
              imgMobileUrl={cooked}
            />
            <ProjectCard
              name={'Stock Photos'}
              description={
                'A place for you to find and download free photos and images, taken from people for all over the wolrd.'
              }
              appUrl={'https://stockphotos.vercel.app/'}
              techs={['React', 'styled-components', 'Next.js']}
              imgUrl={photostockfhd}
              repoUrl={'https://github.com/brunovdsa/photoApp'}
              imgMobileUrl={photostock}
            />
            <ProjectCard
              name={'Stock Exchange'}
              description={
                'A plataform to search and compare revenue, expenses, profit and EBITDA from the selected company, using graphics.'
              }
              appUrl={'https://stockexchanges.vercel.app/'}
              techs={['React', 'TypeScript', 'Sass', 'GoogleCharts']}
              imgUrl={stockexchangefhd}
              repoUrl={'https://github.com/brunovdsa/chart'}
              imgMobileUrl={stockexchange}
            />
          </CardsContainer>
        </Section>
      </>
    </MainContainer>
  );
}
