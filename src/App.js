import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// import Bar Chart Page Component
import BarChart from './charts/BarChart';

// Import Line Chart Page Component
import LineChart from './charts/LineChart';
import { Line } from 'react-chartjs-2';

const GRAPHQL_ENDPOINT = 'https://cse412-project-v2.herokuapp.com/v1/graphql'


const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Homepage */}
        <h1>CSE 412 Project</h1>
        <div className="graphChange">
          {/* This is where the buttons will be for switching graphs */}

          <Link to="/barchart"> Bar Chart </Link>
          <Link to="/linechart"> Line Chart </Link>

          <Routes>
            <Route path='/barchart' element={<BarChart />}/>

            <Route path='/linechart' element={<LineChart />}/>


          </Routes>



        </div>
      </div>
    </Router>
  );
}

export default App;
