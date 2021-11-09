import React, { useEffect, useState } from 'react';
import './App.css';
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


function App() {
  const url = "http://localhost:4000/employees";
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    getStudents();
  }, []) // only for first time i want to exectute this
  const getStudents= () =>{
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res));
  }

  const columns = [
    { title: "", field: "picture", render: item => <img src={item.picture} alt="" border="3" height="100" width="100" />},
    { title: "First Name", field: "first_name", 
    validate:rowData=>rowData.first_name===undefined || rowData.first_name==="" ? "Required" : true},
    { title: "Last Name", field: "last_name",
    validate:rowData=>rowData.last_name===undefined || rowData.first_name==="" ? "Required" : true},
    { title: "Department", field: "department",
    validate:rowData=>rowData.department===undefined || rowData.first_name==="" ? "Required" : true},
    { title: "Title", field: "title",
    validate:rowData=>rowData.title===undefined || rowData.first_name==="" ? "Required" : true},
    { title: "Phone", field: "phone",
    validate:rowData=>rowData.phone===undefined || rowData.first_name==="" ? "Required" : true},
    { title: "Email", field: "email",
    validate:rowData=>rowData.email===undefined || rowData.first_name==="" ? "Required" : true},
    { title: "Location", field: "location",
    validate:rowData=>rowData.location===undefined || rowData.first_name==="" ? "Required" : true}
  ]
  return (
    <div className="App">
      <h1 align="center">Employee Directory</h1>
      <MaterialTable 
        icons={tableIcons}
        title="Employee Directory"
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex:-1,
          addRowPosition:"first",
          filtering:filter}}
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

export default App;
