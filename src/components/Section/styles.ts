import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  padding: 0 2rem;

  @media (min-width: 1100px) {
    padding: 0;
  }
`;
