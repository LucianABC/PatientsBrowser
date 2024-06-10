import React, { useState } from 'react';
import { Button, Modal } from 'components';
import { PlusFilled } from 'assets/svgs';
import { Patient } from 'types/Patient';
import { usePatients } from 'hooks/usePatients';
import styles from './Card.module.css';
import EditAddModal from './EditAddModal/EditAddModal';

interface Props {
  patient?: Patient;
}

const Card: React.FC<Props> = ({ patient }) => {
  const { deletePatient } = usePatients();
  const [modal, setModal] = useState<'Edit' | 'Add' | 'Delete' | undefined>();

  const handleEdit = () => {
    setModal('Edit');
  };

  const handleAdd = () => {
    setModal('Add');
  };

  const handleDelete = () => {
    setModal('Delete');
  };

  const handleCloseModal = () => {
    setModal(undefined);
  };

  const handleSubmitDelete = async () => {
    // Delete
    if (patient?.id) {
      await deletePatient(patient?.id);
      handleCloseModal();
    }
  };

  const addNewPatientCard = (
    <div className={styles.AddCard}>
      <h3 style={{ color: '#1e3fae' }}>Add New Patient</h3>
      <Button variant='text' onClick={handleAdd}>
        <PlusFilled width='60px' height='60px' />
      </Button>
    </div>
  );

  return (
    <>
      <div className={styles.Card}>
        {!patient ? (
          addNewPatientCard
        ) : (
          <>
            <div className={styles.Closed}>
              <img src={patient.avatar} />
              <div className={styles.CardTitle}>
                <h5>Patient ID: #{patient.id}</h5>
                <h4>{patient.name}</h4>
              </div>
            </div>

            <div className={styles.Open}>
              <div className={styles.OpenContent}>
                <div>
                  <h6>Description:</h6>
                  <p>{patient.description}</p>
                </div>
                {patient.createdAt && (
                  <div>
                    <h6>Created at:</h6>
                    <p>{new Date(patient.createdAt).toDateString()}</p>
                  </div>
                )}
                <div>
                  <h6>Links:</h6>
                  <Button
                    variant='text'
                    onClick={() => {
                      window.open(patient.website, '_blank');
                    }}
                  >
                    {patient.website}
                  </Button>
                </div>
              </div>
              <footer>
                <Button variant='filled' onClick={handleEdit}>
                  Edit
                </Button>{' '}
                <Button variant='outlined' onClick={handleDelete}>
                  Delete
                </Button>
              </footer>
            </div>
          </>
        )}
      </div>
      {modal && modal !== 'Delete' && (
        <EditAddModal modalType={modal} patient={patient} handleClose={handleCloseModal} />
      )}
      {modal === 'Delete' && (
        <Modal
          isOpen
          title='Delete Patient'
          primaryButton={{ text: 'Delete', action: handleSubmitDelete }}
          secondaryButton={{ text: 'Cancel', action: handleCloseModal }}
        >
          <>Are you sure you want to delete this patient?</>
        </Modal>
      )}
    </>
  );
};

export default Card;
