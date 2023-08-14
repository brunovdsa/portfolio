import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer';
import { Container } from './styles';

export function PageNotFound() {
  return (
    <MainContainer>
      <Container>
        <h1>404!</h1>
        <p>Page not found.</p>
        <span>The page you're looking for dosen't exist.</span>

        <span>
          Go back to <Link to={'/'}>home page</Link>
        </span>
      </Container>
    </MainContainer>
  );
}
