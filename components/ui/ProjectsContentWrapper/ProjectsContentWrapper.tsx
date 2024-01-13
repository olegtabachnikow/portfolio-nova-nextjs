import { FC, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import classes from './ProjectsContentWrapper.module.css';

interface Props {
  children: React.ReactNode;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectsContentWrapper: FC<Props> = ({
  children,
  currentPage,
  setCurrentPage,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      left: (currentPage - 1) * 340,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const handleScroll = () => {
    switch (scrollRef.current?.scrollLeft) {
      case 0:
        return setCurrentPage(1);
      case 340:
        return setCurrentPage(2);
      case 680:
        return setCurrentPage(3);
      case 1020:
        return setCurrentPage(4);
      case 1360:
        return setCurrentPage(5);
      case 1700:
        return setCurrentPage(6);
      case 2040:
        return setCurrentPage(7);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(50px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.2, delay: 0.4 }}
      ref={scrollRef}
      onScroll={handleScroll}
      className={classes.content}
    >
      {children}
    </motion.div>
  );
};

export default ProjectsContentWrapper;
