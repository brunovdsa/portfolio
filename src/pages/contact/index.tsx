import { motion } from 'framer-motion';

import { MainContainer } from '../../components/MainContainer';
import Section from '../../components/Section';

import {
  AboutEmail,
  AboutPerson,
  Container,
  FooterForm,
  Form,
  SendMessageBtn,
} from './styles';
import BlurCard from '../../components/BlurCard';

export default function Contact() {
  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ height: '100vh' }}
      >
        <Section>
          <Container>
            <Form action=''>
              <AboutPerson>
                <input type='text' placeholder={'Name'} />
                <input type='text' placeholder={'Email'} />
              </AboutPerson>
              <AboutEmail>
                <input type='text' placeholder={'Subject'} />
                <input type='text' placeholder={'Message'} />
              </AboutEmail>
              <FooterForm>
                <SendMessageBtn>Send message!</SendMessageBtn>
              </FooterForm>
            </Form>
          </Container>
        </Section>
      </motion.div>
    </MainContainer>
  );
}
