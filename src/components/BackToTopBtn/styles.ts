import { filterProps } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  transition: 0.2s;

  bottom: 60px;
  right: 20px;
  height: 3rem;
  width: 3rem;
  position: fixed;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  border: 1px solid transparent;
  outline: none;

  font-size: ${(props) => props.theme.font_size.md};

  @media (min-width: 1100px) {
    bottom: 90px;
    right: 50px;
    height: 3.5rem;
    width: 3.5rem;
    &:hover {
      box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
    }
  }
`;
