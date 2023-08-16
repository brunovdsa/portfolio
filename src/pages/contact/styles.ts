import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (min-width: 1100px) {
    padding: 1rem 0rem 0.2rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${(props) => props.theme.font_size.xlg};
  color: ${(props) => props.theme.colors.text};

  margin: 1rem 0 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  transition: 1.3s;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};

  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  width: 90vw;

  height: 80%;
  margin: 3rem 0;
  padding: 3rem 2.3rem;

  gap: 1.5rem;

  input,
  textarea {
    background: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    border: none;
    padding: 1.3rem 1rem 1.3rem 1rem;
    resize: vertical;

    color: ${(props) => props.theme.colors.text};
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme.colors.text};
      opacity: 70%;
    }

    :focus {
      box-shadow: 1px 8px 15px 0 ${(props) => props.theme.colors.box_shadow};
      transition: 0.3s;
    }
  }

  @media (min-width: 1100px) {
    width: 80vw;
    padding: 4rem 3rem;
  }
`;

export const AboutPerson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    width: 100%;
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;

    input {
      width: 50%;
    }
  }
`;

export const AboutEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  textarea {
    height: 10rem;
  }
`;

export const FooterForm = styled.div`
  margin: 2rem 0;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SendMessageBtn = styled.button`
  cursor: pointer;
  font-size: ${(props) => props.theme.font_size.md};
  font-weight: ${(props) => props.theme.font_weight.bold};
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};

  transition: 0.2s;
  width: 100%;

  height: 3.5rem;

  background: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  border: none;

  &:hover {
    box-shadow: 1px 8px 15px 0 ${(props) => props.theme.colors.box_shadow};
    transition: 0.3s;
  }

  @media (min-width: 1100px) {
    width: 25%;
    height: 3.8rem;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: ${(props) => props.theme.font_size.xlg};
    font-weight: ${(props) => props.theme.font_weight.bold};
    color: ${(props) => props.theme.colors.text};
  }

  span {
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.light};
  }

  button {
    margin: 1rem 0 0;
    cursor: pointer;
    font-size: ${(props) => props.theme.font_size.md};
    font-weight: ${(props) => props.theme.font_weight.bold};
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};

    transition: 0.2s;
    width: 100%;

    height: 3.5rem;

    background: ${(props) => props.theme.colors.background};
    border-radius: 25px;
    border: none;

    &:hover {
      box-shadow: 1px 8px 15px 0 ${(props) => props.theme.colors.box_shadow};
      transition: 0.3s;
    }
  }
`;
