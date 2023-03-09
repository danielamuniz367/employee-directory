import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './EmployeeModal.css';

interface Inputs {
    id: number,
    first_name: string,
    last_name: string,
    title: string,
    department: string,
    location: string,
    phone: string
}

const EmployeeModal = ({ onClose, onModalDataUpdate } : any) => {
    // const [id, setId] = useState<number>();
    // const [firstName, setFirstName] = useState<string>();
    // const [lastName, setLastName] = useState<string>();
    // const [title, setTitle] = useState<string>();
    // const [department, setDepartment] = useState<string>();
    // const [location, setLocation] = useState<string>();
    // const [phoneNumber, setPhoneNumber] = useState<string>();
    const [modalData, setModalData] = useState<Inputs>();

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        // setFirstName(data.first_name);
        // setLastName(data.last_name);
        // setTitle(data.title);
        // setDepartment(data.department);
        // setLocation(data.location);
        // setPhoneNumber(data.phone);
        setModalData(data);
    };

    const dataToTable = (data: any) => {
        onModalDataUpdate(data);
    }

    useEffect(()=>{
        if(modalData) dataToTable(modalData);
    },[modalData])

    return (
        <div className="modal">
            <h3>Employee Information</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register('first_name', { required: true })}
                    label="First Name" id="first_name" name="first_name" variant="standard" />
                <TextField {...register('last_name', { required: true })}
                    label="Last Name" id="last_name" name="last_name" variant="standard" />
                <TextField {...register('title', { required: true })}
                    label="Title" id="title" name="title" variant="standard" />
                <TextField {...register('department', { required: true })}
                    label="Department" id="department" name="department" variant="standard" />
                <TextField {...register('location', { required: true })}
                    label="Location" id="location" name="location" variant="standard" />
                <TextField {...register('phone', { required: true })}
                    label="Phone Number" id="phone" name="phone" variant="standard" />
                <Button type="submit" onClick={_e => dataToTable}>Submit</Button>
            </form>
            <Button onClick={onClose}>Close</Button>
        </div>
    );
}

export default EmployeeModal;