import { useState } from 'react';
import { Patient } from 'types/Patient';
import { usePatientsStore } from 'stores/Patients';

export const useGetAllPatients = async (): Promise<Patient[]> => {
  return await fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users')
    .then(async (response) => {
      const res = await response.json();
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export const useDeletePatient = async (id: string) => {
  // Deletes
  return await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users/${id}`, {
    method: 'DELETE',
  })
    .then(async (response) => {
      const res = await response.json();
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const usePatchPatient = async (id: string, newData: Patient) => {
  // Edit
  return await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newData.name,
      description: newData.description,
      website: newData.website,
      avatar: newData.avatar,
    }),
  })
    .then(async (response) => {
      const res = await response.json();
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const usePostPatient = async (p: Patient): Promise<any> => {
  // Creates
  return await fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...p }),
  })
    .then(async (response) => {
      const res = await response.json();
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};
