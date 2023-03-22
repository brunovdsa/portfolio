import { Link } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import Navbar from '../Navbar';

import {
  Container,
  Title,
  MobileNavbar,
  DesktopNavbar,
  Nav,
  ThemeSwitcherContainer,
} from './styles';
import DesktopThemeSwitcherBtn from '../DesktopThemeSwitcherBtn';

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

      <DesktopNavbar>
        <Nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/experience'}>Work Experience</Link>
          <Link to={'/about'}>About</Link>
        </Nav>
      </DesktopNavbar>
      <ThemeSwitcherContainer>
        <DesktopThemeSwitcherBtn
          toggleTheme={props.toggleTheme}
          title={props.theme.title}
        />
      </ThemeSwitcherContainer>
      <MobileNavbar>
        <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
      </MobileNavbar>
    </Container>
  );
}
