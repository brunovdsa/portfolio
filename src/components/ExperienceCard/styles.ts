import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font_family.inter};
  padding: 1rem;
  max-width: 99%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Company = styled.h1`
  font-size: ${(props) => props.theme.font_size.lg};
  font-weight: ${(props) => props.theme.font_weight.semi_bold};
  text-decoration: none;
`;

export const JobTitle = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  font-weight: ${(props) => props.theme.font_weight.regular};
`;

export const Years = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};

  font-weight: ${(props) => props.theme.font_weight.regular};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.font_size.sm};

  font-weight: ${(props) => props.theme.font_weight.light};
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0;
`;

export const TechList = styled.ul`
  font-size: ${(props) => props.theme.font_size.xsm};
  font-weight: ${(props) => props.theme.font_weight.light};
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tech = styled.li`
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  display: flex;
  padding: 0.5rem 0.8rem;
`;