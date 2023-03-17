import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 1rem 1rem;
  height: 100vh;

  @media (min-width: 1100px) {
    padding: 1rem 12rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${(props) => props.theme.font_size.xlg};
  color: ${(props) => props.theme.colors.text};

  margin: 2rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

export const HeaderContent = styled.div``;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const Img = styled.img`
  display: none;

  @media (min-width: 1100px) {
    display: block;
    width: 15rem;
    float: left !important;
    margin: 0 1rem 0 0;
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

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.md};
  }
`;
