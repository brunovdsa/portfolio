import { Container, Content } from './styles';

interface SectionProps {
  children: JSX.Element;
}

export default function Section(props: SectionProps) {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
}
