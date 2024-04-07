import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface Props {
  children: ReactNode;
}

export const CardContentWrapper: FC<Props> = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(50px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.2, delay: 0.4 }}
      style={{
        textAlign: i18n.language === 'iw' ? 'right' : 'left',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
};
