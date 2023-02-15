import React, { useContext, useEffect } from "react";
import { Context } from "../store";
import { getEmployees } from "../services/employees";

const Employees = () => {
    const { data, setData } = useContext(Context);

    useEffect(() => {
        console.log('rendered')
        getEmployees(setData);
    }, [setData])

    return (
        <div className="employee-info">
            <h1>Employee Directory</h1>
            <h3>This app so far contains two child components: 
                <ul>
                    <li>Employees (fetches data for global store and shows this info)</li>
                    <li>Employee Table (shows fetched data in a table)</li>
                </ul>
            </h3>
        </div>
    )
}

export default Employees;