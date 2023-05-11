import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Card from '../../components/BlurCard';
import Section from '../../components/Section';
import { MainContainer } from '../../components/MainContainer';

import me from '../../assets/img/me.jpeg';

import {
  AboutContainer,
  Container,
  MainTitle,
  Content,
  Img,
  Info,
  HeaderContent,
} from './styles';

export default function About() {
  return (
    <MainContainer>
      <Container>
        <MainTitle>Here's my story.</MainTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Card>
            <Section>
              <AboutContainer>
                <Content>
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
                  <HeaderContent>
                    <Img src={me} />
                    <Info>
                      In my last experience, I worked as a junior full-stack
                      developer for the retail segment at
                      <span>
                        <a target='_blank' href='https://1worldsync.com/br/'>
                          {' '}
                          1WorldSyncBR
                        </a>
                      </span>
                      . Where I helped to maintain, and create new
                      functionalities to the main product, that consists in a
                      plataform that provides content solutions for products.
                    </Info>
                    <Info>
                      Before{' '}
                      <span>
                        <a target='_blank' href='https://1worldsync.com/br/'>
                          {' '}
                          1WorldSyncBR
                        </a>
                      </span>
                      , I worked at
                      <span>
                        <a target='_blank' href='https://opentechgr.com.br/'>
                          {' '}
                          OpenTech
                        </a>
                      </span>
                      . First, as a process assistant automating decision-making
                      processes of the truck tracking system. And later on,
                      became a junior front-end developer, helping to give
                      maintenance to the logistic system the comapany uses.
                    </Info>
                    <Info>
                      You can find me on
                      <span>
                        <a
                          target='_blank'
                          href='https://www.linkedin.com/in/brunovdsa/'
                        >
                          {' '}
                          Linkedin
                        </a>
                      </span>
                      , where I keep all my professional data up to date, and
                      where I share and update projects. You can also follow me
                      on
                      <span>
                        <a target='_blank' href='https://github.com/brunovdsa'>
                          {' '}
                          GitHub
                        </a>
                      </span>
                      , or you can contact me
                      <span>
                        <Link to={'/contact'}> here</Link>
                      </span>
                    </Info>
                    <Info>
                      See all my journey <Link to={'/experience'}>here</Link>.
                    </Info>
                  </HeaderContent>
                </Content>
              </AboutContainer>
            </Section>
          </Card>
        </motion.div>
      </Container>
    </MainContainer>
  );
}
