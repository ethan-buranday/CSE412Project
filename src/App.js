import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

// import Bar Chart Page Component
import BarChart from './charts/BarChart';

// Import Line Chart Page Component
import LineChart from './charts/LineChart';
import { Line } from 'react-chartjs-2';

// const GRAPHQL_ENDPOINT = 'https://cse412-project-v2.herokuapp.com/v1/graphql'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://cse412-project-v2.herokuapp.com/v1/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* Homepage */}
          <h1>CSE 412 Project</h1>
          <div className="graphChange">
            {/* This is where the buttons will be for switching graphs */}

            {/* Links */}
            <Link to="/barchart"> Bar Chart </Link>
            <Link to="/linechart"> Line Chart </Link>

            <Routes>
              {/* Bar Chart */}
              <Route path='/barchart' element={<BarChart />}/>
              {/* Line Chart */}
              <Route path='/linechart' element={<LineChart />}/>
            </Routes>



          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
