import React, { FC } from 'react';
import classes from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader} />
    </div>
  );
};

export default Loader;
