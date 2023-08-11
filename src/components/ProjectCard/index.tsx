import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { GitHubIcon } from '../Icons';

import {
  Container,
  Description,
  Img,
  ImgMobile,
  ImgContainer,
  Info,
  ItemsList,
  List,
  MadeWith,
  RepositoryBtn,
  Techs,
  Title,
  VisitBtn,
} from './styles';
import { i18n } from '../../translate/i18n';

interface CardProps {
  name: string;
  description: string;
  techs: string[];
  imgUrl: string;
  imgMobileUrl: string;
  appUrl: string;
  repoUrl: string;
}

export default function ProjectCard(props: CardProps) {
  const { ref, inView } = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <div ref={ref}>
      <Container
        as={motion.div}
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        variants={variants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Info>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
          <Techs>
            <MadeWith>{i18n.t('projectsPage.madeUsing')}</MadeWith>
            <List>
              {props.techs.map((tech) => (
                <ItemsList key={tech}>{tech}</ItemsList>
              ))}
            </List>
          </Techs>

          <VisitBtn href={props.appUrl}>
            {' '}
            {i18n.t('projectsPage.visitProject')} {props.name}
          </VisitBtn>
          <RepositoryBtn href={props.repoUrl}>
            <GitHubIcon />
          </RepositoryBtn>
        </Info>
        <ImgContainer>
          <Img
            src={props.imgUrl}
            loading='lazy'
            alt={`${i18n.t('projectsPage.altText')} ${props.name}`}
          />
          <ImgMobile
            src={props.imgMobileUrl}
            loading='lazy'
            alt={`${i18n.t('projectsPage.altText')} ${props.name}`}
          />
        </ImgContainer>
      </Container>
    </div>
  );
}
