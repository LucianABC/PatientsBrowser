import { Patient } from 'types/Patient';
import { useGetAllPatients, usePostPatient, useDeletePatient, usePatchPatient } from 'services/Patient';
import { usePatientsStore } from 'stores/Patients';
import { useSnackbar } from 'notistack';

export const usePatients = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { setPatients, patients } = usePatientsStore((state) => ({
    setPatients: state.setPatients,
    patients: state.patients,
  }));

  const fetchPatients = async () => {
    const patients = await useGetAllPatients();
    setPatients(patients ?? []);
  };

  const addNewPatient = async (p: Patient) => {
    try {
      await usePostPatient(p);
    } catch (e) {
      enqueueSnackbar('Error creating patient', { variant: 'error' });
    } finally {
      await fetchPatients();
      enqueueSnackbar('Patient added succesfully', { variant: 'success' });
    }
  };
  const deletePatient = async (id: string) => {
    try {
      await useDeletePatient(id);
    } catch (e) {
      enqueueSnackbar('Error deleting patient', { variant: 'error' });
    } finally {
      await fetchPatients();
      enqueueSnackbar('Patient deleted succesfully', { variant: 'success' });
    }
  };

  const editPatient = async (id: string, p: Patient) => {
    try {
      await usePatchPatient(id, p);
    } catch (e) {
      enqueueSnackbar('Error editing patient', { variant: 'error' });
    } finally {
      await fetchPatients();
      enqueueSnackbar('Patient edited succesfully', { variant: 'success' });
    }
  };

  return {
    patients,
    addNewPatient,
    deletePatient,
    fetchPatients,
    editPatient,
  };
};
