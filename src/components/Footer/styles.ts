import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0px 0px 2px 0 ${(props) => props.theme.colors.box_shadow};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: ${(props) => props.theme.colors.caption_600};
    }
  }
`;

export const ChooseLanguage = styled.div``;

export const LinksContainer = styled.div`
  display: flex;

  gap: 2rem;
  font-size: ${(props) => props.theme.font_size.sm};
`;
