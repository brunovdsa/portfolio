import styled from 'styled-components';

export const Container = styled.div`
  scroll-behavior: smooth;
  margin: 0;
  color: ${(props) => props.theme.colors.text};

  background: ${(props) => props.theme.colors.background_800};
  background-size: 1200% 1200%;
  animation: gradient 7s ease infinite reverse;

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
