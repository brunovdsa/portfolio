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
import { Helmet } from 'react-helmet';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  // const [fieldsError, setFieldsError] = useState<boolean>(true);
  // const [emailError, setEmailError] = useState<boolean>(false);
  // const [emailErrorType, setEmailErrorType] = useState<string>('');

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Complete all fields.');
      return;
    } else {
      // setFieldsError(false);
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
          // setEmailError(false);
          alert('Email sent! Thank you!');
        },
        (err) => {
          // setEmailError(true);
          // setEmailErrorType(err);
          alert(err);
        }
      );
  }

  return (
    <MainContainer>
      <Container>
        <Helmet>
          <title>{`${i18n.t('contactPageTabTitle')} Bruno de Sá`}</title>
        </Helmet>
        <MainTitle>{i18n.t('contactPage.title')}</MainTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ height: '100vh' }}
        >
          <Section>
            <Container>
              {/* <div>{fieldsError === true ? <h1>COMPLETE</h1> : ''}</div>
              <div>
                {emailError === true ? (
                  <h1>Erro no envio. Erro: emailErrorType</h1>
                ) : (
                  <h1>Email enviado com sucesso! Obrigado!</h1>
                )}
              </div> */}
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
