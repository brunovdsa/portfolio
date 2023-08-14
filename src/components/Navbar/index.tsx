import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';

import { CloseIcon, NavbarIcon } from '../Icons';

import ThemeSwitcherBtn from '../MobileThemeSwitcherBtn';

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
import { i18n } from '../../translate/i18n';

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
            {i18n.t('navBarComponent.navLinkHome')}
          </Link>
          <Button onClick={onClick}>
            <CloseIcon />
          </Button>
        </NavHeader>

        <NavContent>
          <Link to={'/about'} onClick={onClick}>
            {i18n.t('navBarComponent.navLinkAbout')}
          </Link>
          <Link to={'/projects'} onClick={onClick}>
            {i18n.t('navBarComponent.navLinkProjects')}
          </Link>
          <Link to={'/experience'} onClick={onClick}>
            {i18n.t('navBarComponent.navLinkExperience')}
          </Link>
          <Link to={'/contact'} onClick={onClick}>
            {i18n.t('navBarComponent.navLinkContact')}
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
