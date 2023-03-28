import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from '../../components/BlurCard';
import {
  Company,
  Container,
  Content,
  Description,
  Header,
  JobTitle,
  Tech,
  TechContainer,
  TechList,
  Years,
} from './styles';

interface ExperienceCard {
  company: string;
  jobTitle: string;
  years: string;
  description: string;
  techs: string[];
}

export default function ExperienceCard(props: ExperienceCard) {
  const { ref, inView } = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <div ref={ref}>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        variants={variants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Card>
          <Container>
            <Header>
              <Company>{props.company}</Company>
              <JobTitle>{props.jobTitle}</JobTitle>
              <Years>{props.years}</Years>
            </Header>
            <Content>
              <Description>{props.description}</Description>
              <TechContainer>
                <TechList>
                  {props.techs.map((tech) => (
                    <Tech>{tech}</Tech>
                  ))}
                </TechList>
              </TechContainer>
            </Content>
          </Container>
        </Card>
      </motion.div>
    </div>
  );
}
