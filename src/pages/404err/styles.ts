import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 99%;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font_size.xlg};
  font-weight: ${(props) => props.theme.font_weight.bold};
  color: ${(props) => props.theme.colors.text};
`;

export const ErrorName = styled.p`
  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.semi_bold};
  margin: 0 0 0.5rem;
`;

export const Message = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.light};
  margin: 0 0 0.3rem;

  a {
    text-decoration: none;
    font-size: ${(props) => props.theme.font_size.sm};
    font-weight: ${(props) => props.theme.font_weight.bold};
    color: ${(props) => props.theme.colors.caption_400};

    &:hover {
      color: ${(props) => props.theme.colors.success};
      transition: 0.3s;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  gap: 0.5rem;
`;

export const FollowMeText = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.light};
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;

  font-size: ${(props) => props.theme.font_size.lg};

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.caption_600};
      transition: 0.3 s;
    }
  }
`;
