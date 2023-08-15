import { Container, Modal } from './styles';

interface modalErrorProps {
  children: JSX.Element;
}

export function ModalError(props: modalErrorProps) {
  return (
    <Container>
      <Modal>{props.children}</Modal>
    </Container>
  );
}
