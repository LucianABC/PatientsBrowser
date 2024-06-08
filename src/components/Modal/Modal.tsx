import React, { ButtonHTMLAttributes } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  variant: 'outlined' | 'filled' | 'text';
  children: string;
};

const Modal: React.FC<Props> = ({ variant, children, ...props }) => {
  return (
    <button {...props} >
      {children}
    </button>
  );
};

export default Modal;
