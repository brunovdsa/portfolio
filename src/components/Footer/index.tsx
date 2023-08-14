import { ChooseLanguage, Container, LinksContainer } from './styles';

import { GitHubIcon, LinkedinIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { ChooseLanguageBar } from '../ChooseLanguageBar';

interface FooterProps {
  handleSelect(e: any): void;
  language: any;
}

export function Footer(props: FooterProps) {
  return (
    <Container>
      <ChooseLanguage>
        <ChooseLanguageBar
          handleSelect={props.handleSelect}
          language={props.language}
        />
      </ChooseLanguage>
      <LinksContainer>
        <Link to={'https://github.com/brunovdsa'}>
          <GitHubIcon />
        </Link>
        <Link to={'https://www.linkedin.com/in/brunovdsa/'}>
          <LinkedinIcon />
        </Link>
      </LinksContainer>
    </Container>
  );
}
