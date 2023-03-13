import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 1rem 2rem;
  height: 100vh;
`;

export const MainTitle = styled.h1`
  font-size: ${(props) => props.theme.font_size.xlg};
  color: ${(props) => props.theme.colors.text};

  margin: 2rem 0;
`;

export const Card = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};

  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  width: 100%;
  max-width: 99%;
  padding: 1.5rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const Img = styled.img`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

export const Info = styled.p`
  font-size: ${(props) => props.theme.font_size.sm};
  margin: 1rem 0;

  span {
    color: ${(props) => props.theme.colors.success};
    font-weight: ${(props) => props.theme.font_weight.bold};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};

      transition: 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.success};
      }
    }
  }
`;
