export function getEmployees() {
    return fetch(url)
      .then(res => res.json());
}

export function createEmployee(newData) {
    return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json);
}

export function updateEmployee(newData, oldData) {
    return fetch(`${url}/${oldData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json)
}

export function deleteEmployee(oldData){
    return fetch(`${url}/${oldData.id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': "application/json"
        },
      })
        .then(res => res.json)
}