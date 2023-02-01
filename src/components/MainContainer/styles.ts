import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  color: ${(props) => props.theme.colors.text};

  background: ${(props) => props.theme.colors.background_800};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (min-width: 1100px) {
  }
`;
