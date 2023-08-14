import { useEffect, useState } from 'react';
import { Button, Container } from './styles';
import { CaretUpIcon } from '../Icons';

export function BackToTopBtn() {
  const [backToTopBtn, setBackToTopBtn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      {backToTopBtn && (
        <Button onClick={scrollUp}>
          <CaretUpIcon />
        </Button>
      )}
    </Container>
  );
}
