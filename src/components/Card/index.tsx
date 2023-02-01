import { GitHubIcon } from '../Icons';
import {
  Container,
  Description,
  Img,
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
  url: string;
  techs: string[];
  imgUrl: string;
}

export default function Card(props: CardProps) {
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
        <ImgContainer>
          <Img src={props.imgUrl} />
        </ImgContainer>

        <VisitBtn href={props.url}> Visit {props.name}</VisitBtn>
        <RepositoryBtn>
          <GitHubIcon />
        </RepositoryBtn>
      </Info>
    </Container>
  );
}
