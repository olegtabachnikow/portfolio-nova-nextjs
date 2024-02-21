'use client';

import { FC, FormEvent, useState } from 'react';
import classes from './Form.module.css';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { motion } from 'framer-motion';
import { isDesktop } from 'react-device-detect';
import FormInput from '../FormInput/FormInput';
import { emailRegex } from '@/constants/constants';
import { useTranslation } from 'next-i18next';
import Loader from '../Loader/Loader';

interface FormDataType {
  name: { value: string; error: string };
  email: { value: string; error: string };
  message: { value: string; error: string };
}

const initialFormData: FormDataType = {
  name: { value: '', error: '' },
  email: { value: '', error: '' },
  message: { value: '', error: '' },
};

const Form: FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false), setIsSent(true);
    }, 5000);
  };

  // const onSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;
  //   const errors = { name: '', email: '', message: '' };
  //   if (name.value.trim().length < 3) {
  //     errors.name = t('form.errors.name_length');
  //   }
  //   if (!name.value.length) {
  //     errors.name = t('form.errors.name_required');
  //   }
  //   if (!email.value.match(emailRegex)) {
  //     errors.email = t('form.errors.email_invalid');
  //   }
  //   if (!email.value.length) {
  //     errors.email = t('form.errors.email_required');
  //   }
  //   if (message.value.trim().length < 10) {
  //     errors.message = t('form.errors.message_required');
  //   }
  //   if (!message.value.length) {
  //     errors.message = t('form.errors.mesage_length');
  //   }
  //   if (errors.name || errors.email || errors.message) {
  //     setFormData({
  //       name: { value: name.value, error: errors.name },
  //       email: { value: email.value, error: errors.email },
  //       message: { value: message.value, error: errors.message },
  //     });
  //     return;
  //   }
  //   const validatedData = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };

  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       body: JSON.stringify(validatedData),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`response status: ${response.status}`);
  //     }
  //     const responseData = await response.json();
  //     //some SUCCESS frontend feedback
  //     alert('Message successfully sent');
  //   } catch (err) {
  //     console.error(err);
  //     alert('Error, please try resubmitting the form');
  //     //some frontend feedback about error
  //   }
  // };

  return (
    <CardContentWrapper>
      <div className={classes.form_wrapper}>
        {isSending && (
          <>
            <div className={classes.overlay} />
            <div className={classes.sending}>
              <Loader />
              <span>Sending...</span>
            </div>
          </>
        )}
        <motion.form
          initial={{ opacity: 1 }}
          animate={{ opacity: isSending ? 0.5 : 1 }}
          className={classes.form}
          onSubmit={onSubmit}
          name='message'
          noValidate
        >
          <FormInput
            name='name'
            label={t('form.labels.name')}
            type='text'
            onChange={(str: string) => {
              setFormData({ ...formData, name: { value: str, error: '' } });
            }}
            value={formData.name.value}
            error={formData.name.error}
          />
          <FormInput
            name='email'
            label={t('form.labels.email')}
            type='text'
            onChange={(str: string) => {
              setFormData({ ...formData, email: { value: str, error: '' } });
            }}
            value={formData.email.value}
            error={formData.email.error}
          />
          <FormInput
            name='message'
            label={t('form.labels.message')}
            type='textarea'
            onChange={(str: string) => {
              setFormData({ ...formData, message: { value: str, error: '' } });
            }}
            value={formData.message.value}
            error={formData.message.error}
          />
          <motion.button
            initial={{ opacity: isDesktop ? 0.7 : 1 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className={classes.button}
            type='submit'
          >
            {t('form.submit')}
          </motion.button>
        </motion.form>
      </div>
    </CardContentWrapper>
  );
};

export default Form;
