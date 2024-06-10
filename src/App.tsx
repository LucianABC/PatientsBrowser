import React, { useEffect } from 'react';
import { Card } from 'components';
import styles from './App.module.css';
import { usePatients } from 'hooks/usePatients';
import { SnackbarProvider } from 'notistack';

const App = () => {
  const { fetchPatients, patients } = usePatients();

  useEffect(() => {
    void fetchPatients();
  }, []);

  return (
    <SnackbarProvider>
      <div className={styles.App}>
        <div className={styles.Head}>
          <h1>My Patients Browser</h1>
        </div>
        <div className={styles.CardContainer}>
          <Card key={0} />
          {patients?.map((p) => {
            return <Card key={p.id} patient={p} />;
          })}
        </div>
      </div>
    </SnackbarProvider>
  );
};

export default App;
