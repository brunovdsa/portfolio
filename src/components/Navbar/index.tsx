import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';

import { CloseIcon, NavbarIcon } from '../Icons';

import ThemeSwitcherBtn from '../MobileThemeSwitcherBtn/MobileThemeSwitcherBtn';

import {
  Button,
  Container,
  Nav,
  NavContent,
  NavFooter,
  NavHeader,
  BackgroundOverlay,
  ThemeSwitcherContainer,
} from './styles';

interface NavbarProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export default function Navbar(props: NavbarProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { title } = useContext(ThemeContext);

  const dropDownRef = useRef(null);

  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Button onClick={onClick}>
        <NavbarIcon style={{ height: '2rem' }} />
      </Button>
      {isActive && <BackgroundOverlay onClick={onClick} />}
      <Nav
        ref={dropDownRef}
        style={
          isActive
            ? { right: '1rem', transition: '450ms' }
            : { right: '-100%', transition: '450ms' }
        }
      >
        <NavHeader>
          <Link to={'/'} onClick={onClick}>
            Home
          </Link>
          <Button onClick={onClick}>
            <CloseIcon />
          </Button>
        </NavHeader>

        <NavContent>
          <Link to={'/projects'} onClick={onClick}>
            Projects
          </Link>
          <Link to={'/experience'} onClick={onClick}>
            Experience
          </Link>
          <Link to={'/about'} onClick={onClick}>
            About
          </Link>
        </NavContent>

        <NavFooter>
          <ThemeSwitcherContainer>
            <ThemeSwitcherBtn toggleTheme={props.toggleTheme} title={title} />
          </ThemeSwitcherContainer>
        </NavFooter>
      </Nav>
    </Container>
  );
}
