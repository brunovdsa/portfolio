import { Header } from '../Header';

interface HeaderProps {
  children: JSX.Element;
}

export function MainContainer(props: HeaderProps) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
}
