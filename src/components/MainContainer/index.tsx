import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import { Header } from '../Header';

import dark from '../../theme/dark';
import light from '../../theme/light';
import GlobalStyle from '../../assets/styles/global';

import { Container, Page } from './styles';
import { useState } from 'react';
import { Footer } from '../Footer';

interface MainContainerProps {
  children: JSX.Element;

  style?: React.CSSProperties;
}

const I18N_STORAGE_KEY = 'i18nextLng';

export function MainContainer(props: MainContainerProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [language, setLanguage] = useState<any>(
    localStorage.getItem(I18N_STORAGE_KEY)
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
    localStorage.setItem(I18N_STORAGE_KEY, e.target.value);
    window.location = window.location;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Page>{props.children}</Page>
        <Footer handleSelect={handleSelect} language={language} />
      </Container>
    </ThemeProvider>
  );
}
