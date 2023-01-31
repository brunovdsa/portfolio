import styled from 'styled-components';

export const ThemeSwitcher = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.5rem !important;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  border: none;
  outline: none;
  height: 3rem;
  width: auto;
`;

export const Icon = styled.div``;

export const Content = styled.div``;
