import styled from 'styled-components';

export const CardsContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  div:last-child {
    margin-bottom: 3rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${(props) => props.theme.font_size.xlg};
  font-weight: ${(props) => props.theme.font_weight.bold};
  color: ${(props) => props.theme.colors.text};
  margin: 2rem 0 0;
  text-align: center;
`;
