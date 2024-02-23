import { FC } from 'react';
import classes from './FormInput.module.css';
import { useTranslation } from 'next-i18next';

interface Props {
  value: string;
  onChange: (str: string) => void;
  name: string;
  type: 'text' | 'textarea';
  label: string;
  error: string;
}

const FormInput: FC<Props> = ({
  value,
  onChange,
  name,
  label,
  type,
  error,
}) => {
  const { i18n } = useTranslation();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.container_inner}>
        {type === 'text' ? (
          <input
            className={classes.input}
            value={value}
            onChange={handleChange}
            type='text'
            required
            name={name}
            dir={i18n.language === 'iw' ? 'rtl' : 'ltr'}
          />
        ) : (
          <textarea
            className={classes.textarea}
            value={value}
            required
            onChange={handleChange}
            name={name}
            rows={8}
            dir={i18n.language === 'iw' ? 'rtl' : 'ltr'}
          />
        )}
        <label
          className={`${classes.label} ${
            i18n.language === 'iw' && classes.reversed
          }`}
        >
          {label}
        </label>
        <p className={classes.error}>{error}</p>
      </div>
    </div>
  );
};

export default FormInput;
