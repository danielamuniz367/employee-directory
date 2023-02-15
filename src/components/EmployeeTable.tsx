import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const EmployeeTable = () => {
    const { data } = useContext(Context);
    const [headers, setHeaders] = useState<string[]>([]);

    useEffect(() => {
        if (data) {
            console.log('table rendered');
            setHeaders(Object.keys(data[0]));
        }
    }, [data]);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            headers && headers.map((header, idx) => (
                                <TableCell key={header}>{header}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data && data.map((emp, idx) => (
                            <TableRow>
                                {
                                    Object.entries(emp).map(([key, value]) => (
                                        <TableCell key={key}>{value}</TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EmployeeTable;