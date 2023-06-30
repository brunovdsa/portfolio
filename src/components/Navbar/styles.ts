import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${(props) => props.theme.font_family.inter};
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  cursor: pointer;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.overlay};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 1rem;
  height: 20rem;
  width: 65%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background_700};
  color: ${(props) => props.theme.colors.text};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};
  z-index: 1;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);

  button,
  a {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.regular};
    text-decoration: none;
    width: 100%;
    padding: 0.7rem 0.5rem;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  width: 100%;
  button {
    width: fit-content;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const NavFooter = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
`;

export const ThemeSwitcherContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 0 0.1rem;
`;
