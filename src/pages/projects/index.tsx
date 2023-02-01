import Card from '../../components/Card';
import { MainContainer } from '../../components/MainContainer';
import Section from '../../components/Section';

import portfolio from '../../assets/img/portfolio.png';

export default function Projects() {
  return (
    <MainContainer>
      <Section>
        <Card
          name={'Portfolio'}
          description={
            'Vet Life Natural Canine UltraHypo é um alimento coadjuvante seco indicado para cães com hipersensibilidade ou intolerância alimentar. '
          }
          url={'https://brunovdsa.vercel.app/'}
          techs={['react', 'styled-components']}
          imgUrl={portfolio}
        />
      </Section>
    </MainContainer>
  );
}
