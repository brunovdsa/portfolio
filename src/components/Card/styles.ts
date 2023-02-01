import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 3rem 0;

  padding: 2rem 2rem;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};

  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  max-width: 100%;
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
`;

export const Techs = styled.div`
  margin: 0 0 1rem;
`;

export const MadeWith = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.bold};
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
  background-color: ${(props) => props.theme.colors.background_700};
  border-radius: 25px;

  backdrop-filter: blur(300px);
  -webkit-backdrop-filter: blur(300px);
  padding: 0.5rem 0.8rem;
  margin: 0.5rem 0.2rem;
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  width: 18rem;
  max-width: fit-content;
`;

export const VisitBtn = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;

  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.bold};
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(300px);
  -webkit-backdrop-filter: blur(300px);
  border-radius: 25px;
  padding: 0.8rem 2rem;
  margin: 1rem 1rem 0.5rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
  }
`;

export const RepositoryBtn = styled.a`
  margin: 0.5rem 0;
  cursor: pointer;

  svg {
    height: 1.3rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.caption_600};
  }
`;
