import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  background: ${(props) => props.theme.colors.overlay};
  box-shadow: 0px 0px 1px 0 ${(props) => props.theme.colors.box_shadow};

  height: 5rem;

  a {
    text-decoration: none;
  }

  @media (min-width: 1100px) {
    a {
      display: flex;
    }
    display: grid;
    grid-template-columns: 33% 33% 33%;
    justify-items: stretch;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.xlg};
  font-family: ${(props) => props.theme.font_family.monoton};
  font-weight: ${(props) => props.theme.font_weight.regular};
  text-decoration: none;
  rotate: 50deg;
  display: flex;
`;

export const DesktopNavbar = styled.div`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;

  a {
    font-size: ${(props) => props.theme.font_size.sm};
    color: ${(props) => props.theme.colors.text};
    padding: 0.5rem 2.5rem;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.caption_400};
    }
  }
`;

export const ThemeSwitcherContainer = styled.div`
  display: none;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const MobileNavbar = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
`;
