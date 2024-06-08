import React from 'react';
import { Modal } from 'components';
import { Patient } from 'types/Patient';

interface Props {
  handleClose: () => void;
  modalType: 'Edit' | 'Add';
  patient?: Patient;
}

const EditAddModal: React.FC<Props> = ({ modalType, handleClose }) => {
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
      holassss
    </Modal>
  );
};

export default EditAddModal;
