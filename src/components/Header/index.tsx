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
import { i18n } from '../../translate/i18n';

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
          <Link to={'/'}>{i18n.t('header.headerHomeLink')}</Link>
          <Link to={'/about'}>{i18n.t('header.headerAboutLink')}</Link>
          <Link to={'/projects'}>{i18n.t('header.headerProjectsLink')}</Link>
          <Link to={'/experience'}>
            {i18n.t('header.headerExperienceLink')}
          </Link>
          <Link to={'/contact'}>{i18n.t('header.headerContactLink')}</Link>
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
