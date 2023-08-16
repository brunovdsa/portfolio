import { useState } from 'react';
import { delay, motion } from 'framer-motion';
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
  ModalContainer,
  SendMessageBtn,
} from './styles';
import { i18n } from '../../translate/i18n';
import { Helmet } from 'react-helmet';
import { ModalError } from '../../components/modalError';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [fieldsError, setFieldsError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [emailErrorType, setEmailErrorType] = useState<string>('');

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === '' || email === '' || subject === '' || message === '') {
      setFieldsError(true);
      return;
    } else {
      setFieldsError(false);
      console.log('fields: ' + fieldsError);
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
          setEmailError(false);
          setEmailSent(true);
        },
        (err) => {
          setEmailError(true);
          setEmailSent(false);
          setEmailErrorType(err);
        }
      );
  }

  const handleFieldsError = () => setFieldsError(!fieldsError);
  const handleEmailError = () => setEmailError(!emailError);
  const handleEmailSent = () => setEmailSent(!emailSent);

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
          style={{ height: '100%' }}
        >
          <div onClick={handleFieldsError}>
            {fieldsError === true ? (
              <ModalError>
                <ModalContainer>
                  <h1>{i18n.t('contactPage.modalFieldsError.title')}</h1>
                  <span>{i18n.t('contactPage.modalFieldsError.text')}</span>
                  <button onClick={handleFieldsError}>
                    {i18n.t('contactPage.modalFieldsError.button')}
                  </button>
                </ModalContainer>
              </ModalError>
            ) : (
              ''
            )}
          </div>
          <Section>
            <Container>
              <div onClick={handleEmailError}>
                {emailError === true ? (
                  <ModalError>
                    <ModalContainer>
                      <h1>{i18n.t('contactPage.modalEmailError.title')}</h1>
                      <span>{i18n.t('contactPage.modalEmailError.text')}</span>
                      <span>{`${i18n.t(
                        'contactPage.modalEmailError.errorType'
                      )} ${emailErrorType}`}</span>
                      <button onClick={handleEmailError}>
                        {i18n.t('contactPage.modalEmailError.button')}
                      </button>
                    </ModalContainer>
                  </ModalError>
                ) : (
                  ''
                )}
              </div>
              <div onClick={handleEmailSent}>
                {emailSent === true ? (
                  <ModalError>
                    <ModalContainer>
                      <h1>{i18n.t('contactPage.modalEmailSent.title')}</h1>
                      <span>{i18n.t('contactPage.modalEmailSent.text')}</span>
                      <button onClick={handleEmailSent}>
                        {i18n.t('contactPage.modalEmailSent.button')}
                      </button>
                    </ModalContainer>
                  </ModalError>
                ) : (
                  ''
                )}
              </div>
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
