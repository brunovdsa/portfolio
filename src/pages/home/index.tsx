import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Section from '../../components/Section';
import { MainContainer } from '../../components/MainContainer';

import img from '../../assets/img/me.webp';

import {
  Img,
  Intro,
  About,
  Title,
  Description,
  Links,
  ProjectsBtn,
  AboutBtn,
} from './styles';

export default function Home() {
  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Section>
          <Intro>
            <Img src={img} />
            <About>
              <Title>
                Hi! I'm <span>Bruno</span>. I'm a junior frontend developer.
              </Title>
              <Description>
                I like to craft solid frontend products with grate user
                experiences.
              </Description>
              <Links>
                <ProjectsBtn>
                  <Link to={'/projects'} className='project-btn'>
                    Projects
                  </Link>
                </ProjectsBtn>
                <AboutBtn>
                  <Link to={'/about'} className='about-btn'>
                    More about me
                  </Link>
                </AboutBtn>
              </Links>
            </About>
          </Intro>
        </Section>
      </motion.div>
    </MainContainer>
  );
}
