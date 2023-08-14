import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem 1.5rem;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0px 0px 2px 0 ${(props) => props.theme.colors.box_shadow};
  gap: 2rem;
`;
