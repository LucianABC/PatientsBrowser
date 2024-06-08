import React, { InputHTMLAttributes } from 'react';
import styles from './TextField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  multiline?: boolean;
}

const TextField: React.FC<Props> = ({ onChange, disabled, label, value, multiline, ...props }) => {
  return (
    <div className={styles.Wrapper}>
      <label className={styles.Label}><h5>{label}</h5></label>
      {!multiline && <input {...props} disabled={disabled} className={styles.Input} name='myInput' value={value} />}
      {multiline && <textarea className={styles.TextArea} value={value} />}
    </div>
  );
};

export default TextField;
