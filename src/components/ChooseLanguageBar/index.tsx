import { Container, Select, Option } from './styles';
import { i18n } from '../../translate/i18n';

import { GlobeIcon } from '../Icons';

interface ChooseLanguageBarProps {
  handleSelect(e: any): void;
  language: any;
}

export function ChooseLanguageBar(props: ChooseLanguageBarProps) {
  return (
    <Container>
      <GlobeIcon />
      <Select onChange={props.handleSelect} value={props.language}>
        <Option value={'pt-BR'}>{i18n.t('chooseLanguageBar.titlePT')}</Option>
        <Option value={'en-US'}>{i18n.t('chooseLanguageBar.titleEN')}</Option>
      </Select>
    </Container>
  );
}
