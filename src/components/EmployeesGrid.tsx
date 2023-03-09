import React, { useContext, useEffect, useState, useMemo } from "react";
import { Context } from "../store";
import { useTable } from 'react-table';
import './EmployeesGrid.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from '../services/employees';
import { createPortal } from 'react-dom';
import EmployeeModal from "./EmployeeModal";


const EmployeesGrid = () => {
    const { data, setData } = useContext(Context);
    const [employeeData, setEmployeeData] = useState(useMemo(() => data, []));
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<any>();
    const [action, setAction] = useState<string>('');

    // get modal form data for row adds/edits
    const getModalData = (data: any) => {
        console.log('getting modal data');
        if(data) {
            setModalData(data);
        }
    }

    // add row
    const handleAddRow = async () => {
        setAction('add');
        setShowModal(true);
        // const dataCopy = [...employeeData];
        // dataCopy.push(data);
        // setEmployeeData(dataCopy);
    }

    // edit row
    const handleEditRow = (row: object) => {
        setAction('edit');
        setShowModal(true);
    }

    // delete row
    const handleDeleteRow = async (row: any) => {
        const toDelete = row.row.original;
        const dataCopy: any = [...employeeData];
        dataCopy.splice(row.row.index, 1);
        setEmployeeData(dataCopy);
        await deleteEmployee(toDelete);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setAction('');
    }

    const columns: any = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name'
            },
            {
                Header: 'Title',
                accessor: 'title'
            },
            {
                Header: 'Department',
                accessor: 'department'
            },
            {
                Header: 'Location',
                accessor: 'location'
            },
            {
                Header: 'Phone Number',
                accessor: 'phone'
            },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: (row: any) => (
                    <div>
                        <EditIcon onClick={_e => handleEditRow(row)}></EditIcon>
                        <DeleteIcon onClick={_e => handleDeleteRow(row)}></DeleteIcon>
                    </div>
                )
            }
        ],
        [employeeData]);

    const tableInstance = useTable({ columns: columns, data: employeeData });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <Box className="employee-directory" style={{ height: 700, width: '100%' }}>
            <h3>Employee Directory</h3>
            <Box>
                <Box><Button onClick={handleAddRow}><AddIcon></AddIcon>Add new employee</Button></Box>
                {showModal && createPortal(
                    <EmployeeModal onClose={handleCloseModal} onModalDataUpdate={getModalData} />,
                    document.body
                )}
                <table {...getTableProps}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {// Loop over the table rows
                            rows.map(row => {
                                // Prepare the row for display
                                prepareRow(row)
                                return (
                                    // Apply the row props
                                    <tr {...row.getRowProps()}>
                                        {// Loop over the rows cells
                                            row.cells.map(cell => {
                                                // Apply the cell props
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {// Render the cell contents
                                                            cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </Box>

        </Box>
    )
}

export default EmployeesGrid;