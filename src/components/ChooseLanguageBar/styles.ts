import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3rem 1.5rem;
`;

export const Select = styled.select`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.bold};
  padding: 0.2rem 0.7rem;
`;

export const Option = styled.option`
  color: ${(props) => props.theme.colors.overlay};
  padding: 2rem 3rem;
`;
