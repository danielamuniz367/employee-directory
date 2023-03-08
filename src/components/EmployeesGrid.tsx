import React, { useContext, useEffect, useState, useMemo } from "react";
import { Context } from "../store";
import { useTable } from 'react-table';
import './EmployeesGrid.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEmployee, getEmployees, updateEmployee } from '../services/employees';
import Box from "@mui/material/Box";

const EmployeesGrid = () => {
    const { data, setData } = useContext(Context);
    const [employeeData, setEmployeeData] = useState(useMemo(() => data, []));

    // add row
    const handleAddRow = () => {
        // data.push({id: 23, first_name: "Windy", last_name: "Carey"});
        // console.log(data);
        // setData(data);
    }

    // edit row
    const handleEditRow = (row: any) => {
        console.log(row);
    }

    // delete row
    const handleDeleteRow = async (row: any) => {
        const toDelete = row.row.original;
        const dataCopy: any = [...employeeData];
        dataCopy.splice(row.row.index, 1);
        setEmployeeData(dataCopy);
        await deleteEmployee(toDelete);
    }

const columns: any = useMemo(
    () => [
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
                    <EditIcon onClick={_e => handleEditRow(row.row.original)}></EditIcon>
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