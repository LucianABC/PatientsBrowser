import React, { ChangeEventHandler } from 'react';
import styles from './TextField.module.css';

interface Props {
  label: string;
  multiline?: boolean;
  onChange: (e: any) => void;
  value?: string;
  disabled?: boolean;
}

const TextField: React.FC<Props> = ({ onChange, disabled, label, value, multiline }) => {
  return (
    <div className={styles.Wrapper}>
      <label className={styles.Label}>
        <h5>{label}</h5>
      </label>
      {!multiline && (
        <input disabled={disabled} className={styles.Input} name={label.toLowerCase()} value={value} onChange={onChange} />
      )}
      {multiline && <textarea className={styles.TextArea} name={label.toLowerCase()} value={value} onChange={onChange} disabled={disabled} />}
    </div>
  );
};

export default TextField;
