import * as React from 'react';
import styles from './button.module.css';

export const Button = () => {
  return (
    <button className={`${styles['btn']} ${styles['btn-violet']}`}>Boop</button>
  );
};
