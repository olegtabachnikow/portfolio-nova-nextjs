import React, { FC } from 'react';
import classes from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner_box}>
        <div className={classes.blue_orbit + ' ' + classes.leo} />
        <div className={classes.green_orbit + ' ' + classes.leo} />
        <div className={classes.red_orbit + ' ' + classes.leo} />
        <div
          className={classes.white_orbit + ' ' + classes.w1 + ' ' + classes.leo}
        />
        <div
          className={classes.white_orbit + '' + classes.w2 + ' ' + classes.leo}
        />
        <div
          className={classes.white_orbit + ' ' + classes.w3 + ' ' + classes.leo}
        />
      </div>
    </div>
  );
};

export default Loader;
