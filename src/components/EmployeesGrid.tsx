import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const EmployeesGrid = () => {
    const { data } = useContext(Context);
    const [gridData, setGridData] = useState<object[]>([]);

    useEffect(() => {
        localStorage.setItem('grid-data', JSON.stringify(data));
        console.log(localStorage.getItem('grid-data'));
    }, [gridData]);
    
    return (
        <div style={{ height: 700, width: '100%' }}>
            <h3>Employee Directory</h3>
            <DataGrid rows={data} columns={columns} />
      </div>
    )
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150  },
    { field: 'first_name', headerName: 'First Name', width: 150, editable: true },
    { field: 'last_name', headerName: 'Last Name', width: 150, editable: true },
    { field: 'location', headerName: 'Location', width: 150, editable: true },
    { field: 'title', headerName: 'Title', width: 150, editable: true },
    { field: 'department', headerName: 'Department', width: 150, editable: true },
    { field: 'phone', headerName: 'Phone', width: 150, editable: true },
  ];

export default EmployeesGrid;