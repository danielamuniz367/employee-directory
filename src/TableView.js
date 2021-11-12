import React, { useEffect, useState } from 'react';
import MaterialTable from "material-table";
import * as tableIcons from './constants/table-icons'
import { Link } from "react-router-dom";

function TableView(props){
const url = "http://localhost:4000/employees";
const [data, setData] = useState([])

  useEffect(() => {
    getStudents();
  }, []) // only for first time i want to exectute this
  const getStudents= () =>{
    fetch(url)
      .then(res => res.json())
      .then(res => {
          setData(res)
          props.update(res);
        });
  }


  const columns = [
    { title: "", field: "picture", render: item => <img src={item.picture} alt="" border="3" height="100" width="100" />},
    { title: "First Name", field: "first_name", 
    validate:rowData=>rowData.first_name===undefined || rowData.first_name ==="" ? "Required" : true},
    { title: "Last Name", field: "last_name",
    validate:rowData=>rowData.last_name===undefined || rowData.last_name ==="" ? "Required" : true},
    { title: "Department", field: "department",
    validate:rowData=>rowData.department===undefined || rowData.department ==="" ? "Required" : true},
    { title: "Title", field: "title",
    validate:rowData=>rowData.title===undefined || rowData.title ==="" ? "Required" : true},
    { title: "Phone", field: "phone",
    validate:rowData=>rowData.phone===undefined || rowData.phone ==="" ? "Required" : true},
    { title: "Email", field: "email",
    validate:rowData=>rowData.email===undefined || rowData.email ==="" ? "Required" : true},
    { title: "Location", field: "location",
    validate:rowData=>rowData.location===undefined || rowData.location ==="" ? "Required" : true}
  ]
  return (
    <div className="table">
      <h1 align="center">Employee Directory</h1>
      <Link to="/grid-view">
        <button>Grid View</button>
    </Link>
      <MaterialTable
        icons={tableIcons.tableIcons}
        title=""
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex:-1,
          addRowPosition:"first",
          filtering:true}}
        // takes object here and pass props
        // takes callback function and return promise call
        editable={{
          onRowAdd:(newData)=> new Promise((resolve, reject)=>{
            // backend call
            fetch(url,{
              method: 'POST',
              headers: {
                'Content-Type': "application/json"
              },
              body: JSON.stringify(newData)
            })
              .then(res => res.json)
              .then(res => {getStudents()
                resolve()
              });
          }),
          onRowUpdate:(newData,oldData)=> new Promise((resolve, reject)=>{
            // backend call
            fetch(`${url}/${oldData.id}`,{
              method: 'PUT',
              headers: {
                'Content-Type': "application/json"
              },
              body: JSON.stringify(newData)
            })
              .then(res => res.json)
              .then(res => {getStudents()
                resolve()
              });
          }),
          onRowDelete:(oldData)=> new Promise((resolve, reject)=>{
            // backend call
            fetch(`${url}/${oldData.id}`,{
              method: 'DELETE',
              headers: {
                'Content-Type': "application/json"
              },
            })
              .then(res => res.json)
              .then(res => {getStudents()
                resolve()
              });
          })
        }}
        ></MaterialTable>
    </div>
  );
}

  export default TableView;
