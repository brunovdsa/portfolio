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
  return (
    <Container>
      <Info>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Techs>
          <MadeWith>Made using:</MadeWith>
          <List>
            {props.techs.map((tech) => (
              <ItemsList>{tech}</ItemsList>
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
  );
}
