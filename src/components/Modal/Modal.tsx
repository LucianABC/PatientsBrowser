import React, { HTMLAttributes } from 'react';
import { Times } from 'assets/svgs';
import { Button } from 'components';
import styles from './Modal.module.css';

interface ModalButton {
  text: string;
  action: (e?: any) => any;
  disabled?: boolean;
}

interface Props extends HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  title?: string;
  onClose?: () => void;
  primaryButton: ModalButton;
  secondaryButton?: ModalButton;
}

const Modal: React.FC<Props> = ({ isOpen, title, onClose, primaryButton, secondaryButton, children }) => {
  return isOpen ? (
    <>
      <div className={styles.Overlay} onClick={onClose} />
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <header>
            <h3>{title}</h3>
            <Times width='10px' height='10px' onClick={onClose} />
          </header>
          <div className={styles.Content}> {children}</div>
          <footer>
            <Button variant='filled' disabled={primaryButton.disabled} onClick={primaryButton.action}>
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button variant='outlined' disabled={secondaryButton.disabled} onClick={secondaryButton.action}>
                {secondaryButton.text}
              </Button>
            )}
          </footer>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
