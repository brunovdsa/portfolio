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
  return (
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
  );
}
