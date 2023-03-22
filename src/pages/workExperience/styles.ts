import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${(props) => props.theme.font_family.inter};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 2rem 0;
  margin: 0 1rem;

  gap: 2.5rem;

  @media (min-width: 1100px) {
    padding: 0 11rem 2rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font_family.inter};
  font-size: ${(props) => props.theme.font_size.xlg};
  font-weight: ${(props) => props.theme.font_weight.bold};
  text-decoration: none;

  @media (min-width: 1100px) {
    margin: 2rem 0 0.5rem;
  }
`;
