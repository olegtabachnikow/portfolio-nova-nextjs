'use client';

import { FC, FormEvent, useState } from 'react';
import classes from './Form.module.css';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { motion } from 'framer-motion';
import { isDesktop } from 'react-device-detect';
import FormInput from '../FormInput/FormInput';
import { emailRegex } from '@/constants/constants';

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
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const errors = { name: '', email: '', message: '' };
    if (name.value.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }
    if (!name.value.length) {
      errors.name = 'Name is required';
    }
    if (!email.value.match(emailRegex)) {
      errors.email = 'Invalid email';
    }
    if (!email.value.length) {
      errors.email = 'Email is required';
    }
    if (message.value.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    if (!message.value.length) {
      errors.message = 'Message is required';
    }
    if (errors.name || errors.email || errors.message) {
      setFormData({
        name: { value: name.value, error: errors.name },
        email: { value: email.value, error: errors.email },
        message: { value: message.value, error: errors.message },
      });
      return;
    }
    // send data
  };

  return (
    <CardContentWrapper>
      <form
        className={classes.form}
        onSubmit={onSubmit}
        name='message'
        noValidate
      >
        <FormInput
          name='name'
          label='name'
          type='text'
          onChange={(str: string) => {
            setFormData({ ...formData, name: { value: str, error: '' } });
          }}
          value={formData.name.value}
          error={formData.name.error}
        />
        <FormInput
          name='email'
          label='email'
          type='text'
          onChange={(str: string) => {
            setFormData({ ...formData, email: { value: str, error: '' } });
          }}
          value={formData.email.value}
          error={formData.email.error}
        />
        <FormInput
          name='message'
          label='Your message'
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
          Send
        </motion.button>
      </form>
    </CardContentWrapper>
  );
};

export default Form;
