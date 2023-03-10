import Card from '../../components/Card';
import { MainContainer } from '../../components/MainContainer';
import Section from '../../components/Section';

import { CardsContainer, MainTitle } from './styles';

import cooked from '../../assets/img/cooked.png';
import cookedfhd from '../../assets/img/cookedfhd.png';
import photostock from '../../assets/img/photostock.png';
import photostockfhd from '../../assets/img/photostockfhd.png';
import stockexchange from '../../assets/img/stockexchange.png';
import stockexchangefhd from '../../assets/img/stockexchangefhd.png';

export default function Projects() {
  return (
    <MainContainer>
      <>
        <Section>
          <MainTitle>A selection of my favorite works.</MainTitle>
        </Section>
        <Section>
          <CardsContainer>
            <Card
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
            <Card
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
            <Card
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
