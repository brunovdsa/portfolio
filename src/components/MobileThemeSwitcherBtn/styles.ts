import styled from 'styled-components';

export const ThemeSwitcher = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem !important;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  border: 1px solid transparent;
  outline: none;
  height: 3rem;
  width: auto;
  transition: 0.2s;

  @media (min-width: 1100px) {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100%;
    &:hover {
      border: 1px solid ${(props) => props.theme.colors.text};
    }
  }
`;

export const Icon = styled.div`
  margin-right: 0.5rem;

  cursor: pointer;

  @media (min-width: 1100px) {
    margin: 0;
    font-size: ${(props) => props.theme.font_size.md};
  }
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
`;
