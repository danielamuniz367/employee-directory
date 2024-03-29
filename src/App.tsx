import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Store } from './store';
import Employees from './components/Employees';
import EmployeesGrid from './components/EmployeeTable';
import FeaturedEmployee from './components/EmployeeGrid';
import './App.css';

// note to self: when you want to use React Router, the best way to start is with a navigation component that will
// be used in the App component.
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <hr />
      <Store>
        <Routes>
          <Route path={ROUTES.LANDING} element={<Employees />}></Route>
          <Route path={ROUTES.GRID} element={<FeaturedEmployee />}></Route>
          <Route path={ROUTES.DIRECTORY} element={<EmployeesGrid />}></Route>
        </Routes>
      </Store>
    </Router>
  );
}

export default App;
