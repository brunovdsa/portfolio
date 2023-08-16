import { MoonIcon, SunIcon } from '../Icons';

import { ThemeSwitcher, Icon, Content } from './styles';

interface ThemeSwitcherBtnProps {
  toggleTheme(): void;
  title?: string;
}

export default function MobileThemeSwitcherBtn(props: ThemeSwitcherBtnProps) {
  return (
    <ThemeSwitcher onClick={props.toggleTheme}>
      <Icon>{props.title === 'light' ? <MoonIcon /> : <SunIcon />}</Icon>
      <Content>
        Change to {props.title === 'light' ? 'dark' : 'light'} theme
      </Content>
    </ThemeSwitcher>
  );
}
