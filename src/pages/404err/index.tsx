import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer';
import {
  Container,
  Content,
  ErrorName,
  FollowMeText,
  IconsContainer,
  Message,
  Title,
} from './styles';
import { GitHubIcon, LinkedinIcon, WppIcon } from '../../components/Icons';
import { i18n } from '../../translate/i18n';

export function PageNotFound() {
  return (
    <MainContainer>
      <Container>
        <Title>{i18n.t('pageNotFound.title')}</Title>
        <ErrorName>{i18n.t('pageNotFound.errorName')}</ErrorName>
        <Message>{i18n.t('pageNotFound.message')}</Message>

        <Message>
          {i18n.t('pageNotFound.goBackMessage')}
          <Link to={'/'}>{i18n.t('pageNotFound.linkToHome')}</Link>
        </Message>
        <Content>
          <FollowMeText>{i18n.t('pageNotFound.followMeText')}</FollowMeText>
          <IconsContainer>
            <Link to={'https://github.com/brunovdsa'}>
              <GitHubIcon />
            </Link>
            <Link to={'https://www.linkedin.com/in/brunovdsa/'}>
              <LinkedinIcon />
            </Link>
            <Link to={'https://wa.me/5547999054703'}>
              <WppIcon />
            </Link>
          </IconsContainer>
        </Content>
      </Container>
    </MainContainer>
  );
}
