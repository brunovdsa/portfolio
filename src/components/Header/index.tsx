import { Link } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import Navbar from '../Navbar';
import { Container, Title } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Link to={'/'}>
        <Title>B</Title>
      </Link>

      <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
    </Container>
  );
}
