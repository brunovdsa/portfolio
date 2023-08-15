import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { i18n } from '../../translate/i18n';

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
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Helmet>
          <title>{`${i18n.t('homePageTabTitle')} Bruno de Sá`}</title>
        </Helmet>
        <Section>
          <Intro>
            <Img src={img} />
            <About>
              <Title>
                {i18n.t('homePageTitles.pt1')}{' '}
                <span>{i18n.t('homePageTitles.pt2')}. </span>
                {i18n.t('homePageTitles.pt3')}
              </Title>
              <Description>{i18n.t('homePageDescription.text')}</Description>
              <Links>
                <ProjectsBtn>
                  <Link to={'/projects'} className='project-btn'>
                    {i18n.t('homePageButtons.homePageToProject')}
                  </Link>
                </ProjectsBtn>
                <AboutBtn>
                  <Link to={'/about'} className='about-btn'>
                    {i18n.t('homePageButtons.homePageToAbout')}
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
