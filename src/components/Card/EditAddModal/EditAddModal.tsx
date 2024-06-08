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
  const [fieldValues, setFieldValues] = useState<{
    name?: string;
    description?: string;
    website?: string;
    avatar?: string;
  }>({
    name: patient?.name,
    description: patient?.description,
    website: patient?.website,
    avatar: patient?.avatar,
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

  const handleChange = (e: any) => {
    console.log({ e });
    setFieldValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
              <label htmlFor='avatar'>
                <h5>Choose a profile picture:</h5>
              </label>
              <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' />
            </>
          )}
        </div>

        <form>
          <TextField label='Name' value={fieldValues?.name} onChange={handleChange} />
          <TextField label='Website' value={fieldValues?.website} onChange={handleChange} />
          <TextField label='Description' multiline value={fieldValues?.description} onChange={handleChange} />
        </form>
      </div>
    </Modal>
  );
};

export default EditAddModal;
