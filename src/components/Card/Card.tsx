import React from 'react';
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
                <p>{patient.createdAt}</p>
              </div>
              <div>
                <h6>Links:</h6>
                <p>{patient.website}</p>
              </div>
            </div>
            <footer>
              <a>Edit</a> <a>Delete</a>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
