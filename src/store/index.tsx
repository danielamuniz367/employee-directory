import React, { createContext, useState } from "react";

type EmployeeData = {
    data: Array<object>,
    setData: React.Dispatch<React.SetStateAction<Array<object>>>
};

export const Context = createContext<EmployeeData>(undefined as unknown as EmployeeData);

type Props = {
    children: React.ReactNode
}

export const Store = ({ children }: Props) => {
    const [data, setData] = useState([{}]);
    const value = {data, setData};

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}