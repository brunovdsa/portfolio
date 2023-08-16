import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  scroll-behavior: smooth;
  background: ${(props) => props.theme.colors.background_800};
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;

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
    height: 100%;
    margin: 0;
    padding: 0;
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
  }
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
`;
