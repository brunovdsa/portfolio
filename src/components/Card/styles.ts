import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 3rem 0;

  padding: 2rem 1rem;
  max-width: 95%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};

  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  max-width: 95%;
`;

export const Info = styled.div``;

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
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemsList = styled.li`
  background-color: ${(props) => props.theme.colors.background_700};
  border-radius: 25px;

  backdrop-filter: blur(300px);
  -webkit-backdrop-filter: blur(300px);
  padding: 0.5rem 0.8rem;
  margin: 0.2rem 0;
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
  margin: 1rem 0 1rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
  }
`;

export const ImgContainer = styled.div`
  margin: 1.5rem 0;
`;

export const Img = styled.img`
  height: 10rem;
  max-width: fit-content;
`;
