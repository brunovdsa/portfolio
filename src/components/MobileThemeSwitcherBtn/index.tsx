import { i18n } from '../../translate/i18n';
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
        {i18n.t('navBarComponent.changeThemeBtnPt1')}
        {props.title === 'light' ? 'dark' : 'light'}
        {i18n.t('navBarComponent.changeThemeBtnPt2')}
      </Content>
    </ThemeSwitcher>
  );
}
