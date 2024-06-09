import { create } from 'zustand';
import { Patient } from 'types/Patient';

interface Store {
  patients: Patient[];
  setPatients: (p: Patient[]) => void;
  addPatient: (p: Patient[]) => void;
  removePatient: (p: Patient[]) => void;
  editPatient: (p: Patient[]) => void;
}

export const usePatientsStore = create<Store>((set) => ({
  patients: [],
  setPatients: (_patients: Patient[]) => {
    set((state) => {
      return {
        patients: _patients,
      };
    });
  },
  addPatient: (_patients: Patient[]) => {
    set((state) => {
      return {
        patients: _patients,
      };
    });
  },
  removePatient: (_patients: Patient[]) => {
    set((state) => {
      return {
        patients: _patients,
      };
    });
  },
  editPatient: (_patients: Patient[]) => {
    set((state) => {
      return {
        patients: _patients,
      };
    });
  },
}));
