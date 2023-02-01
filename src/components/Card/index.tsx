import {
  Container,
  Description,
  Img,
  ImgContainer,
  Info,
  ItemsList,
  List,
  MadeWith,
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
        <VisitBtn href={props.url}> Visit {props.name}</VisitBtn>
      </Info>
      <ImgContainer>
        <Img src={props.imgUrl} />
      </ImgContainer>
    </Container>
  );
}
