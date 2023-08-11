import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '../../utils/usePersistedState';

import { Header } from '../Header';

import dark from '../../theme/dark';
import light from '../../theme/light';
import GlobalStyle from '../../assets/styles/global';

import { Container } from './styles';
import { useState } from 'react';
import { ChooseLanguageBar } from '../ChooseLanguageBar';

interface MainContainerProps {
  children: JSX.Element;

  style?: React.CSSProperties;
}

const I18N_STORAGE_KEY = 'i18nextLng';

export function MainContainer(props: MainContainerProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
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
        <ChooseLanguageBar handleSelect={handleSelect} language={language} />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <div>{props.children}</div>
      </Container>
    </ThemeProvider>
  );
}
