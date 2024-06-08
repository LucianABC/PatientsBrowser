import React, { useState } from 'react';
import { Modal, TextField } from 'components';
import { Patient } from 'types/Patient';
import styles from './EditAddModal.module.css';

interface Props {
  handleClose: () => void;
  modalType: 'Edit' | 'Add';
  patient?: Patient;
}

const EditAddModal: React.FC<Props> = ({ modalType, handleClose, patient }) => {
  const [fieldValues, setFieldValues] = useState<{ name?: string; description?: string; website?: string }>({
    name: patient?.name,
    description: patient?.description,
    website: patient?.website,
  });

  const handleEdit = () => {
    // Submit Edit
    handleClose();
  };

  const handleAdd = () => {
    // Submit Add
    handleClose();
  };

  const primaryButton = {
    text: 'Submit',
    action: modalType === 'Add' ? handleAdd : handleEdit,
  };

  const secondaryButton = {
    text: 'Cancel',
    action: handleClose,
  };

  return (
    <Modal
      isOpen={Boolean(modalType)}
      title={`${modalType} Patient`}
      onClose={handleClose}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
    >
      <div className={styles.Content}>
        <div className={styles.AvatarContainer}>
          {modalType === 'Edit' ? (
            <>
              <img src={patient?.avatar} />
              <span>
                <h5>Patient ID:</h5>
                <p>{patient?.id}</p>
              </span>
            </>
          ) : (
            <>
              <label htmlFor='avatar'><h5>Choose a profile picture:</h5></label>
              <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' />
            </>
          )}
        </div>

        <form>
          <TextField label='Name' value={patient?.name} />
          <TextField label='Website' value={patient?.website} />
          <TextField label='Description' multiline value={patient?.description} />
        </form>
      </div>
    </Modal>
  );
};

export default EditAddModal;
