import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 99%;
`;

export const Content = styled.section`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  max-width: 99%;

  @media (min-width: 1100px) {
    padding: 0;
  }
`;
