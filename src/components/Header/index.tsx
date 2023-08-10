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
  handleSelect(e: any): void;
  theme: DefaultTheme;
  language: any;
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
        <select onChange={props.handleSelect} value={props.language}>
          <option value={'pt-BR'}>pt-BR</option>
          <option value={'en-US'}>en-US</option>
        </select>
      </ThemeSwitcherContainer>
      <MobileNavbar>
        <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
      </MobileNavbar>
    </Container>
  );
}
