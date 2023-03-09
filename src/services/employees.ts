import { URL as url } from "../constants";

export async function getEmployees(setData: (data: any) => void) {
    const employees = await fetch(url);
    const employeesData = await employees.json();
    setData(employeesData);
}

export async function createEmployee(newData: any) {
    const newEmployee = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newData)
    });
    const newEmployeeJson = newEmployee.json()
    return newEmployeeJson;
}

export function updateEmployee(newData: any, oldData: { id: any; }) {
    return fetch(`${url}/${oldData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newData)
    })
        .then(res => res.json)
}

export function deleteEmployee(oldData: { id: any; }) {
    return fetch(`${url}/${oldData.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': "application/json"
        },
    })
        .then(res => res.json)
}