import { Patient } from 'types/Patient';
import { useGetAllPatients, usePostPatient, useDeletePatient, usePatchPatient } from 'services/Patient';
import { usePatientsStore } from 'stores/Patients';

export const usePatients = () => {
  const { setPatients, patients } = usePatientsStore((state) => ({
    setPatients: state.setPatients,
    patients: state.patients,
  }));

  const fetchPatients = async () => {
    const patients = await useGetAllPatients();
    setPatients(patients ?? []);
  };

  const addNewPatient = async (p: Patient) => {
    await usePostPatient(p);
    await fetchPatients();
  };
  const deletePatient = async (id: string) => {
    await useDeletePatient(id);
    await fetchPatients();
  };

  const editPatient = async (id: string, p: Patient) => {
    await usePatchPatient(id, p);
    await fetchPatients();
  };

  return {
    patients,
    addNewPatient,
    deletePatient,
    fetchPatients,
    editPatient
  };
};
