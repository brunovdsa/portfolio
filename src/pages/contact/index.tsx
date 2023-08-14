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
import { i18n } from '../../translate/i18n';

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
        <MainTitle>{i18n.t('contactPage.title')}</MainTitle>
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
                    placeholder={i18n.t('contactPage.contacts.name')}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <input
                    type='text'
                    placeholder={i18n.t('contactPage.contacts.email')}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </AboutPerson>
                <AboutEmail>
                  <input
                    type='text'
                    placeholder={i18n.t('contactPage.emailInfo.subject')}
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                  <textarea
                    placeholder={i18n.t('contactPage.emailInfo.message')}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </AboutEmail>
                <FooterForm>
                  <SendMessageBtn>
                    {i18n.t('contactPage.sendMessageBtn')}
                  </SendMessageBtn>
                </FooterForm>
              </Form>
            </Container>
          </Section>
        </motion.div>
      </Container>
    </MainContainer>
  );
}
