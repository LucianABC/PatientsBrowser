import React, { useState } from 'react';
import { Button } from 'components';
import styles from './Card.module.css';

interface Patient {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
}

interface Props {
  patient?: Patient;
}

const Card: React.FC<Props> = ({ patient }) => {
  const addNewPatientCard = <div>Add New Patient</div>;
  const [modal, setModal] = useState<{ type: 'Edit' | 'Add' | 'Delete'; selectedPatient: Patient } | undefined>();

  const handleEdit = () => {
    // Open Edit modal

    console.log('Edit');
  };

  const handleAdd = () => {
    // Open Edit modal

    console.log('Add');
  };

  const handleDelete = () => {
    // Open Edit modal
    console.log('Delete');
  };

  const handleCloseModal = () => {
    setModal(undefined);
  };

  return (
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
              <Button variant='outlined' onClick={handleDelete}>Delete</Button>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
