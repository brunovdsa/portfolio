import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { MainContainer } from '../../components/MainContainer';
import Section from '../../components/Section';

import {
  AboutEmail,
  AboutPerson,
  Container,
  FooterForm,
  Form,
  MainTitle,
  SendMessageBtn,
} from './styles';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Complete all fields');
      return;
    }

    const sendEmailParams = {
      subject: subject,
      name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        'service_94l7ao8',
        'template_5miqe08',
        sendEmailParams,
        'gnTCFwvF_Y-d-IVZV'
      )
      .then(
        (res: any) => {
          console.log('Email sent!' + res.status);
          setName('');
          setSubject('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          console.log('Erro: ', err);
        }
      );
  }

  return (
    <MainContainer>
      <Container>
        <MainTitle>Contact</MainTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ height: '100vh' }}
        >
          <Section>
            <Container>
              <Form action='' onSubmit={sendEmail}>
                <AboutPerson>
                  <input
                    type='text'
                    placeholder={'Name'}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <input
                    type='text'
                    placeholder={'Email'}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </AboutPerson>
                <AboutEmail>
                  <input
                    type='text'
                    placeholder={'Subject'}
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                  <textarea
                    placeholder={'Message'}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </AboutEmail>
                <FooterForm>
                  <SendMessageBtn>Send message!</SendMessageBtn>
                </FooterForm>
              </Form>
            </Container>
          </Section>
        </motion.div>
      </Container>
    </MainContainer>
  );
}
