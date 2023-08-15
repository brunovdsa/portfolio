import { motion } from 'framer-motion';
import ExperienceCard from '../../components/ExperienceCard';
import { MainContainer } from '../../components/MainContainer';
import { CardsContainer, Container, Title } from './styles';
import { i18n } from '../../translate/i18n';
import { BackToTopBtn } from '../../components/BackToTopBtn';
import { Helmet } from 'react-helmet';

export default function WorkExperience() {
  return (
    <MainContainer>
      <Container>
        <Helmet>
          <title>{`${i18n.t('experienceTabTitle')} Bruno de Sá`}</title>
        </Helmet>
        <Title>{i18n.t('experiencePage.title')}</Title>

        <CardsContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ExperienceCard
            company={i18n.t('experiencePage.company1')}
            jobTitle={i18n.t('experiencePage.jobTitle1')}
            years={'2021 - 2021'}
            description={i18n.t('experiencePage.description1')}
            techs={[
              'AngularJs',
              'Angular 11+',
              'AWS',
              'Git',
              'Java',
              'Jira (Atlassian)',
            ]}
          />
          <ExperienceCard
            company={i18n.t('experiencePage.company2')}
            jobTitle={i18n.t('experiencePage.jobTitle2')}
            years={'2020 - 2021'}
            description={i18n.t('experiencePage.description2')}
            techs={[
              'Bootstrap',
              'C#',
              'Git',
              'Jira (Atlassian)',
              'jQuery',
              'NodeJS',
              'React',
              'Sass',
              'SQL Server',
              'Scrum',
            ]}
          />
          <ExperienceCard
            company={i18n.t('experiencePage.company3')}
            jobTitle={i18n.t('experiencePage.jobTitle3')}
            years={'2019 - 2020'}
            description={i18n.t('experiencePage.description3')}
            techs={[
              'BOT',
              'Flowcharts',
              'Kanban',
              'SQL SERVER',
              'Workflow',
              'XML',
            ]}
          />
          <ExperienceCard
            company={i18n.t('experiencePage.company4')}
            jobTitle={i18n.t('experiencePage.jobTitle4')}
            years={'2018 - 2019'}
            description={i18n.t('experiencePage.description4')}
            techs={[`${i18n.t('experiencePage.specialTag')}`, 'Zendesk']}
          />
        </CardsContainer>
        <BackToTopBtn />
      </Container>
    </MainContainer>
  );
}
