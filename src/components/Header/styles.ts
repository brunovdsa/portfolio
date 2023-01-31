import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.xlg};
  font-family: ${(props) => props.theme.font_family.monoton};
  font-weight: ${(props) => props.theme.font_weight.regular};
  text-decoration: none;
  rotate: 50deg;
`;
