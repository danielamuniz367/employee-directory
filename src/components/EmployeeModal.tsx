import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './EmployeeModal.css';

interface Inputs {
  id: number;
  first_name: string;
  last_name: string;
  title: string;
  department: string;
  location: string;
  phone: string;
  picture: string;
}

const EmployeeModal = ({ onClose, onModalDataUpdate }: any) => {
  const [modalData, setModalData] = useState<Inputs>();
  const { register, setValue, handleSubmit } = useForm<Inputs>();
  const { action, data } = onModalDataUpdate();

  const onSubmit = async (data: Inputs) => {
    // setModalData(data);
    // if (action === 'edit') dataToTable(data);
    onModalDataUpdate(data);
  };

  const dataToTable = useCallback(
    (data: any) => {
      onModalDataUpdate(data);
    },
    [onModalDataUpdate]
  );

  useEffect(() => {
    if (action === 'add') dataToTable(modalData);
    else if (action === 'edit' && data) {
      const propKeys = Object.keys(data);
      propKeys.map((key: any) => {
        return setValue(key, data[key]);
      });
    }
  }, [onSubmit, dataToTable]);

  return (
    <div className="modal">
      <h3>Employee Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('first_name', { required: true })}
          label="First Name"
          id="first_name"
          name="first_name"
          variant="standard"
        />
        <TextField
          {...register('last_name', { required: true })}
          label="Last Name"
          id="last_name"
          name="last_name"
          variant="standard"
        />
        <TextField
          {...register('title', { required: true })}
          label="Title"
          id="title"
          name="title"
          variant="standard"
        />
        <TextField
          {...register('department', { required: true })}
          label="Department"
          id="department"
          name="department"
          variant="standard"
        />
        <TextField
          {...register('location', { required: true })}
          label="Location"
          id="location"
          name="location"
          variant="standard"
        />
        <TextField
          {...register('phone', { required: true })}
          label="Phone Number"
          id="phone"
          name="phone"
          variant="standard"
        />
        <TextField
          {...register('picture', { required: true })}
          label="Picture"
          id="picture"
          name="picture"
          variant="standard"
        />
        <Button type="submit" onClick={(_e) => dataToTable}>
          Submit
        </Button>
      </form>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default EmployeeModal;
