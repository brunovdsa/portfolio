import { motion } from 'framer-motion';
import ExperienceCard from '../../components/ExperienceCard';
import { MainContainer } from '../../components/MainContainer';
import { CardsContainer, Container, Title } from './styles';

export default function WorkExperience() {
  return (
    <MainContainer>
      <Container>
        <Title>Work Experience</Title>

        <CardsContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ExperienceCard
            company={'1WorldSyncBR'}
            jobTitle={'Junior Full-Stack Developer'}
            years={'2021 - 2021'}
            description={
              'For the retail segment, the developer had the duty to always deliver the best quality information and images, in relation to the product, which will later be used by the final client. With good practices, clean codes and easy maintenance. Contact with internal and external customers through voice and video calls, mostly in English due to the wide variety of people from outside the country involved in the projects.'
            }
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
            company={'Opentech Logistics and Risk Management Solutions'}
            jobTitle={'Junior Front-End Developer'}
            years={'2020 - 2021'}
            description={
              'Development of solutions for the risk management and vehicle tracking segment. Working with maintenance of the logistics system for the company, creating new pages and functionalities for the end user. Applying concepts of mobile first and great UX design. Started in a legacy system, using jQuery and bootstrap as main tools, and later changed to the main product, using React.'
            }
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
            company={'Opentech Logistics and Risk Management Solutions'}
            jobTitle={'Process Assistant'}
            years={'2019 - 2020'}
            description={
              'Used a front-end platform, automating processes of the tracking and registration areas of the company. Direct contact with internal and external customers by e-mail for alignment of business rules.'
            }
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
            company={'Opentech Logistics and Risk Management Solutions'}
            jobTitle={'Tracking Operator'}
            years={'2018 - 2019'}
            description={
              'Carrying out satellite and GPRS tracking of small, medium and large vehicle trips. Customer service via email and phone, maintaining constant communication throughout the trip, always checking the status of the trip as a whole, from your place of departure to arrival.'
            }
            techs={['Internal Systems', 'Zendesk']}
          />
        </CardsContainer>
      </Container>
    </MainContainer>
  );
}
