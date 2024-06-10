import React, { useState } from 'react';
import { Modal, TextField } from 'components';
import { Patient } from 'types/Patient';
import { usePatients } from 'hooks/usePatients';
import styles from './EditAddModal.module.css';

interface Props {
  handleClose: () => void;
  modalType: 'Edit' | 'Add';
  patient?: Patient;
}

const EditAddModal: React.FC<Props> = ({ modalType, handleClose, patient }) => {
  const { addNewPatient, editPatient } = usePatients();

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

  const handleEdit = async () => {
    // Submit Edit
    if (patient?.id) {
      await editPatient(patient?.id, {
        name: fieldValues.name ?? '',
        description: fieldValues.description ?? '',
        website: fieldValues.website ?? '',
        createdAt: new Date().toDateString(),
        id: patient?.id,
        avatar: fieldValues.avatar ?? '',
      });
    }
    handleClose();
  };

  const handleAdd = async () => {
    // Submit Add
    await addNewPatient({
      name: fieldValues.name ?? '',
      description: fieldValues.description ?? '',
      website: fieldValues.website ?? '',
      createdAt: new Date().toDateString(),
      id: Math.random().toString(),
      avatar: fieldValues.avatar ?? '',
    });
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
    if (e.target.name === 'avatar') {
      // The image won't show because it need to be stored in a domain, but this is a rough example of how it should work
      setFieldValues((prev) => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }));
    }
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
              <img src={fieldValues?.avatar} />
              <span>
                <h5>Patient ID:</h5>
                <p>{patient?.id}</p>
              </span>
            </>
          ) : (
            <>
              {fieldValues.avatar !== '' ? (
                <img src={fieldValues?.avatar} />
              ) : (
                <label htmlFor='avatar'>
                  <h5>Choose a profile picture:</h5>
                </label>
              )}
              <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' onChange={handleChange} />
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
