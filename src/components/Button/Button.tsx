import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'outlined' | 'filled' | 'text';
};

const Button: React.FC<Props> = ({ variant, children, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${styles.Button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
