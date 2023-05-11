import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};

  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  width: 100%;
  min-width: 99%;

  height: 70%;
  margin: 4rem 0;
  padding: 2rem;

  gap: 1rem;
`;

export const AboutPerson = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
  }
`;

export const AboutEmail = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  input {
    background: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    border: none;
  }
`;
