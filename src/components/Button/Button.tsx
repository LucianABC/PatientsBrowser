import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'outlined' | 'filled' | 'text';

};

const Button: React.FC<Props> = ({ variant, children, ...props }) => {
  return (
    <button {...props} className={`${styles.Button} ${styles[variant]}`} >
      {children}
    </button>
  );
};

export default Button;
