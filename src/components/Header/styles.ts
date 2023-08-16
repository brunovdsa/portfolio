import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.5rem;

  width: 100%;
  height: 5rem;
  flex: 0 0 auto;

  background: ${(props) => props.theme.colors.overlay};
  box-shadow: 0px 0px 0px 0 ${(props) => props.theme.colors.box_shadow};

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

export const Title = styled.div`
  display: flex;

  img {
    height: 2.5rem;
    width: 2.5rem;

    @media (min-width: 1100px) {
      height: 3rem;
      width: 3rem;
    }
  }
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
  grid-template-columns: 20% 19% 23% 17% 20%;
  justify-items: center;

  a {
    font-size: ${(props) => props.theme.font_size.sm};
    color: ${(props) => props.theme.colors.text};

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
