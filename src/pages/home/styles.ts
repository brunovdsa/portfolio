import styled from 'styled-components';

export const Main = styled.main`
  margin: 1.1rem 0;
`;

export const Intro = styled.div`
  font-family: ${(props) => props.theme.font_family.inter};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Img = styled.img`
  height: 12rem;
  border-radius: 100%;
  margin: 0 0 3rem;

  @media (min-width: 1100px) {
    height: 20rem;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font_size.xlg};
  font-weight: ${(props) => props.theme.font_weight.bold};

  span {
    color: ${(props) => props.theme.colors.caption_400};
  }
`;

export const Description = styled.span`
  margin: 1rem 0;
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.md};
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 4rem;
`;

export const ProjectsBtn = styled.div`
  background: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.semi_bold};
  margin: 0 0 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
  }
  @media (min-width: 1100px) {
    width: 70%;
  }
`;

export const AboutBtn = styled.div`
  background-color: transparent;
  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.bold};
  border: none;
  cursor: pointer;
  a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.text};
    &:hover {
      color: ${(props) => props.theme.colors.caption_600};
    }
  }

  @media (min-width: 1100px) {
    width: 70%;
  }
`;
