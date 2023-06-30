import { Link } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';

import Navbar from '../Navbar';
import DesktopThemeSwitcherBtn from '../DesktopThemeSwitcherBtn';

import {
  Container,
  Title,
  MobileNavbar,
  DesktopNavbar,
  Nav,
  ThemeSwitcherContainer,
} from './styles';

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
          <Link to={'/experience'}>Experience</Link>
          <Link to={'/contact'}>Contact</Link>
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
