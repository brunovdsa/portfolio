import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { NavbarIcon } from '../Icons';
import ThemeSwitcherBtn from '../ThemeSwitcherBtn/ThemeSwitcherBtn';
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
        <NavbarIcon />
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
          <Button onClick={onClick}>X</Button>
        </NavHeader>

        <NavContent>
          <Link to={'/'} onClick={onClick}>
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
