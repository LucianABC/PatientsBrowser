import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  variant: 'outlined' | 'filled' | 'text';
  children: string;
};

const Button: React.FC<Props> = ({ variant, children, ...props }) => {
  return (
    <button {...props} className={`${styles.Button} ${styles[variant]}`} >
      {children}
    </button>
  );
};

export default Button;
