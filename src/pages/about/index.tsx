import { MainContainer } from '../../components/MainContainer';
import Section from '../../components/Section';
import Card from '../../components/Card';
import {
  AboutContainer,
  Container,
  MainTitle,
  Content,
  Img,
  Info,
  HeaderContent,
} from './styles';

import me from '../../assets/img/me.png';

export default function About() {
  return (
    <MainContainer>
      <Container>
        <MainTitle>Here's my story.</MainTitle>
        <Card>
          <Section>
            <AboutContainer>
              <Content>
                <HeaderContent>
                  <Img src={me} />
                  <Info>
                    I'm Bruno, a developer & <span>creative coder</span> who
                    specializes in front-end development. My mission is to
                    translate user-focussed designs into beautiful websites or
                    applications.
                  </Info>
                  <Info>
                    I'm currently looking for an oportunity to use my knoledge
                    and experience to help the user and the team I'm part of.
                  </Info>
                </HeaderContent>
                <Info>
                  In my last experience, I worked as a junior full-stack
                  developer for the retail segment at
                  <span>
                    <a target='_blank' href='https://1worldsync.com/br/'>
                      {' '}
                      1WorldSyncBR
                    </a>
                  </span>
                  . Where I helped to maintain, and create new functionalities
                  to the main product, that consists in a plataform that
                  provides content solutions for products.
                </Info>
                <Info>
                  Before{' '}
                  <span>
                    <a target='_blank' href='https://1worldsync.com/br/'>
                      {' '}
                      1WorldSyncBR
                    </a>
                  </span>
                  , I worked as a junior front-end developer at
                  <span>
                    <a target='_blank' href='https://opentechgr.com.br/'>
                      {' '}
                      OpenTech
                    </a>
                  </span>
                  . First, as a process assistant automating decision-making
                  processes of the truck tracking system. And later on, became a
                  junior front-end developer, helping to give maintenance to the
                  logistic system the comapany uses.
                </Info>
              </Content>
            </AboutContainer>
          </Section>
        </Card>
      </Container>
    </MainContainer>
  );
}
