import React, { useState } from 'react';
import { Button } from 'components';
import { PlusFilled } from 'assets/svgs';
import { Patient } from 'types/Patient';
import styles from './Card.module.css';
import EditAddModal from './EditAddModal';

interface Props {
  patient?: Patient;
}

const Card: React.FC<Props> = ({ patient }) => {
  const [modal, setModal] = useState<{ type: 'Edit' | 'Add' | 'Delete'; selectedPatient?: Patient } | undefined>();

  const handleEdit = () => {
    // Open Edit modal

    console.log('Edit');
  };

  const handleAdd = () => {
    // Open Edit modal
    console.log('Add');
    setModal({ type: 'Add', selectedPatient: undefined });
  };

  const handleDelete = () => {
    // Open Edit modal
    console.log('Delete');
  };

  const handleCloseModal = () => {
    setModal(undefined);
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
                <div>
                  <h6>Created at:</h6>
                  <p>{new Date(patient.createdAt).toDateString()}</p>
                </div>
                <div>
                  <h6>Links:</h6>
                  <Button variant='text'>{patient.website}</Button>
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
      {modal?.type && modal?.type !== 'Delete' && (
        <EditAddModal modalType={modal?.type} patient={modal?.selectedPatient} handleClose={handleCloseModal} />
      )}
      {modal?.type && modal?.type === 'Delete' && <></>}
    </>
  );
};

export default Card;
