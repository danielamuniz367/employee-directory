import React, {useState} from 'react';
import TableView from './TableView';
import './App.css';
import GridView from './GridView';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [appData, setAppData] = useState();

  const updateData = (data) => {
    setAppData(data);
  }

  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<TableView update={updateData}/>}>
          </Route>
          <Route path="/grid-view" element={<GridView data={appData}/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
