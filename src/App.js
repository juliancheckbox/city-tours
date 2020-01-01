import React, { Fragment } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/navbar/navbar';
import TourList from './components/tourlist/tour-list';

function App() {
  return (
      <Fragment>
        <Navbar />
        <TourList />
      </Fragment>
  );
}

export default App;
