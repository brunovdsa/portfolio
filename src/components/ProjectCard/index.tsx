import { motion, spring, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
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

  const animation = useAnimation();

  useEffect(() => {
    console.log('asduahsdiuahs = ', inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: '',
          duration: 0.8,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: '-100vw',
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Container
        as={motion.div}
        animate={animation}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Info>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
          <Techs>
            <MadeWith>Made using:</MadeWith>
            <List>
              {props.techs.map((tech) => (
                <ItemsList key={tech}>{tech}</ItemsList>
              ))}
            </List>
          </Techs>

          <VisitBtn href={props.appUrl}> Visit {props.name}</VisitBtn>
          <RepositoryBtn href={props.repoUrl}>
            <GitHubIcon />
          </RepositoryBtn>
        </Info>
        <ImgContainer>
          <Img
            src={props.imgUrl}
            loading='lazy'
            alt={`Photo of project: ${props.name}`}
          />
          <ImgMobile
            src={props.imgMobileUrl}
            loading='lazy'
            alt={`Photo of project: ${props.name}`}
          />
        </ImgContainer>
      </Container>
    </div>
  );
}
