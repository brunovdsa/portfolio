import { motion } from 'framer-motion';

import { MainContainer } from '../../components/MainContainer';
import Section from '../../components/Section';

import { AboutEmail, AboutPerson, Container, Form } from './styles';
import BlurCard from '../../components/BlurCard';

export default function Contact() {
  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Section>
          <Container>
            <Form action=''>
              <AboutPerson>
                <input type='text' placeholder={'name'} />
                <input type='text' placeholder={'email'} />
              </AboutPerson>
              <AboutEmail>
                <input type='text' placeholder={'subject'} />
                <input type='text' placeholder={'Message'} />
              </AboutEmail>
              <footer>
                <button>Send message!</button>
              </footer>
            </Form>
          </Container>
        </Section>
      </motion.div>
    </MainContainer>
  );
}
