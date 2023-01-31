import styled from 'styled-components';

export const Intro = styled.div`
  font-family: ${(props) => props.theme.font_family.inter};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  padding: 4rem 0;
`;

export const Img = styled.img`
  height: 12rem;
  border-radius: 100%;
  margin: 0 0 1rem;
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
    color: ${(props) => props.theme.colors.success};
  }
`;

export const Description = styled.span`
  margin: 1rem 0;
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 4rem;
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
  }
`;

export const ProjectsBtn = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.semi_bold};
  margin: 0 0 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.background_800};
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;
