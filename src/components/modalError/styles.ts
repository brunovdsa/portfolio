import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 8px 22px 0 ${(props) => props.theme.colors.box_shadow};

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  height: 30rem;
  width: 60rem;

  border-radius: 50px;
`;
