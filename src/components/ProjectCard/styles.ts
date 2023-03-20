import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 2rem 0;

  padding: 2rem 2rem;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  max-width: 100%;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 55% 45%;
    padding: 4rem 2rem;
    margin: 3rem 12rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font_size.lg};
  font-weight: ${(props) => props.theme.font_weight.bold};
  margin: 0 0 1rem;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};
  margin: 0 0 1rem;

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.regular};
    margin: 0 0 2rem;
  }
`;

export const Techs = styled.div`
  margin: 0 0 1rem;
`;

export const MadeWith = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.bold};

  @media (min-width: 1100px) {
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.bold};
  }
`;

export const List = styled.ul`
  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.light};
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemsList = styled.li`
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;

  padding: 0.5rem 0.8rem;
  margin: 0.5rem 0.2rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  display: none;

  @media (min-width: 1100px) {
    width: 100%;
    max-width: fit-content;
    display: flex;
  }
`;
export const ImgMobile = styled.img`
  width: 18rem;
  max-width: fit-content;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const VisitBtn = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;

  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.bold};
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  padding: 0.8rem 2rem;
  margin: 1rem 1rem 0.5rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
  }

  @media (min-width: 1100px) {
    padding: 0.8rem 4rem;
  }
`;

export const RepositoryBtn = styled.a`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  margin: 0.5rem 0;
  cursor: pointer;

  svg {
    height: 1.3rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.caption_600};
  }
`;
