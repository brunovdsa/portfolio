import { Container } from './styles';

interface CardProps {
  children: JSX.Element;

  style?: React.CSSProperties;
}

export default function BlurCard(props: CardProps) {
  return <Container>{props.children}</Container>;
}
