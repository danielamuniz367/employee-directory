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
  const [appData, setAppData] = useState({a: "a", b: 12});

  const updateData = (data: any) => {
    setAppData(data);
  }

  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<TableView {...appData} />}>
          </Route>
          <Route path="/grid-view" element={<GridView />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
