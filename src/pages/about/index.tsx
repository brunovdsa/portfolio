import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Card from '../../components/BlurCard';
import Section from '../../components/Section';
import { MainContainer } from '../../components/MainContainer';

import me from '../../assets/img/me.webp';

import {
  AboutContainer,
  Container,
  MainTitle,
  Content,
  Img,
  Info,
  HeaderContent,
} from './styles';
import { i18n } from '../../translate/i18n';

export default function About() {
  return (
    <MainContainer>
      <Container>
        <MainTitle>{i18n.t('aboutPage.title')}</MainTitle>
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
                    {i18n.t('aboutPage.introInfo.pt1')}
                    <span>{i18n.t('aboutPage.introInfo.pt2')}</span>
                    {i18n.t('aboutPage.introInfo.pt3')}
                  </Info>
                  <Info>{i18n.t('aboutPage.introInfo.pt4')}</Info>
                  <HeaderContent>
                    <Img
                      src={me}
                      alt={i18n.t('aboutPage.contentInfo.altTextImg')}
                    />
                    <Info>
                      {i18n.t('aboutPage.contentInfo.pt1')}
                      <span>
                        <a target='_blank' href='https://1worldsync.com/br/'>
                          {' '}
                          {i18n.t('aboutPage.contentInfo.pt2')}
                        </a>
                      </span>
                      {i18n.t('aboutPage.contentInfo.pt3')}
                    </Info>
                    <Info>
                      {i18n.t('aboutPage.contentInfo.pt4')}
                      <span>
                        <a target='_blank' href='https://1worldsync.com/br/'>
                          {' '}
                          {i18n.t('aboutPage.contentInfo.pt5')}
                        </a>
                      </span>
                      {i18n.t('aboutPage.contentInfo.pt6')}
                      <span>
                        <a target='_blank' href='https://opentechgr.com.br/'>
                          {' '}
                          {i18n.t('aboutPage.contentInfo.pt7')}
                        </a>
                      </span>
                      {i18n.t('aboutPage.contentInfo.pt8')}
                    </Info>
                    <Info>
                      {i18n.t('aboutPage.contentInfo.pt9')}
                      <span>
                        <a
                          target='_blank'
                          href='https://www.linkedin.com/in/brunovdsa/'
                        >
                          {' '}
                          {i18n.t('aboutPage.contentInfo.pt10')}
                        </a>
                      </span>
                      {i18n.t('aboutPage.contentInfo.pt11')}
                      <span>
                        <a target='_blank' href='https://github.com/brunovdsa'>
                          {' '}
                          {i18n.t('aboutPage.contentInfo.pt12')}
                        </a>
                      </span>
                      {i18n.t('aboutPage.contentInfo.pt13')}
                      <span>
                        <Link to={'/contact'}>
                          {' '}
                          {i18n.t('aboutPage.contentInfo.pt14')}
                        </Link>
                      </span>
                    </Info>
                    <Info>
                      {i18n.t('aboutPage.contentInfo.pt15')}
                      <Link to={'/experience'}>
                        {i18n.t('aboutPage.contentInfo.pt16')}
                      </Link>
                      .
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
