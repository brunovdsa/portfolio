import { Container } from './styles';

import { GitHubIcon } from '../Icons';

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Container>
      <GitHubIcon />
      <GitHubIcon />
    </Container>
  );
}
