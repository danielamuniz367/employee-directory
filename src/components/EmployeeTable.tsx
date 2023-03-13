import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { Context } from '../store';
import { useTable } from 'react-table';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from '../services/employees';
import { createPortal } from 'react-dom';
import EmployeeModal from './EmployeeModal';
import './EmployeeTable.css';

const EmployeesGrid = () => {
  const [data, setData] = useContext(Context);
  const [employeeData, setEmployeeData] = useState(useMemo(() => data, []));
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({});
  const [rowData, setRowData] = useState<any>({});
  const [action, setAction] = useState<string>('');

  // get modal form data for row adds/edits
  const getModalData = (data: object) => {
    if (data) {
      setModalData(data);
    }
    return { action: 'add' };
  };

  // send data from table to modal form
  const prepModalData = (data: any) => {
    if (data) {
      console.log('row data to replace', rowData);
      console.log('prep modal data', data);
      setModalData(data);
      handleEditRow(data);
    }
    return { action: 'edit', data: modalData };
  };

  // add row
  const handleAddRow = useCallback(async (modalData: any) => {
    const employee = await createEmployee(modalData);
    const dataCopy = [...employeeData];
    dataCopy.push(employee);
    setEmployeeData(dataCopy);
  }, []);

  // edit row
  const handleEditRow = useCallback(async (modalData: any) => {
    console.log('handling edit');
    const oldData = employeeData[rowData.index];
    const employee = await updateEmployee(modalData, oldData);
    const dataCopy = [...employeeData];
    dataCopy[rowData.index] = employee;
    setEmployeeData(dataCopy);
  }, [modalData]);

  // delete row
  const handleDeleteRow = async (row: any) => {
    const toDelete = row.row.original;
    const dataCopy: any = [...employeeData];
    dataCopy.splice(row.row.index, 1);
    setEmployeeData(dataCopy);
    await deleteEmployee(toDelete);
  };

  const handleOpenModal = (action: string, row?: any) => {
    setShowModal(true);
    setAction(action);
    setRowData(row.row);
    if (action === 'edit') setModalData(row.row.original);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAction('');
    setModalData({});
  };

  useEffect(() => {
    console.log('employee data changed', employeeData);
    getEmployees(setData);
  }, [employeeData]);

  useEffect(() => {
    if (action === 'add' && modalData) {
      handleAddRow(modalData);
    }
  }, [action, modalData]);

  const columns: any = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Phone Number',
        accessor: 'phone',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (row: any) => (
          <div>
            <ModeEditOutlinedIcon
              onClick={(_e) => handleOpenModal('edit', row)}
            ></ModeEditOutlinedIcon>
            <DeleteOutlinedIcon
              onClick={(_e) => handleDeleteRow(row)}
            ></DeleteOutlinedIcon>
          </div>
        ),
      },
    ],
    [employeeData]
  );

  const tableInstance = useTable({ columns: columns, data: employeeData });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Box className="employee-directory" style={{ height: 700, width: '90%' }}>
      <h3>Employee Directory</h3>
      <Box>
        <Box>
          <Button onClick={(_e) => handleOpenModal('add')}>
            <AddIcon></AddIcon>Add new employee
          </Button>
        </Box>
        {showModal &&
          createPortal(
            <EmployeeModal
              onClose={handleCloseModal}
              onModalDataUpdate={
                action === 'add' ? getModalData : prepModalData
              }
            />,
            document.body
          )}
        <table {...getTableProps} className="employee-directory__table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={`tr-${row.index}`}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} key={`td-${cell.column.id}`}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default EmployeesGrid;
