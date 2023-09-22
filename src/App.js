import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import './App.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios'; // Import Axios library for making HTTP requests
import Create from './components/Create'; // Import the Create component
import Read from './components/Read'; // Import the Read component
import Update from './components/Update'; // Import the Update component
import Delete from './components/Delete'; // Import the Delete component
import Navbar from './components/Navbar'; // Import the Navbar component
import Welcome from './components/Welcome'; // Import the Welcome component
import Monkeyjokes from './components/Monkeyjokes'; // Import the Monkeyjokes component

function App() {
  // Initialize state variable 'data' to store fetched data
  const [data, setData] = useState([]);
  // Initialize state variable 'selectedId' to manage the selected item
  const [selectedId, setSelectedId] = useState(null);

  // Use the useEffect hook to perform an action when 'selectedId' changes
  useEffect(() => {
    fetchAndDisplayData(); // Call 'fetchAndDisplayData' function when 'selectedId' changes
  }, [selectedId]);

  // Define a function to fetch data from the API and update the 'data' state variable
  const fetchAndDisplayData = () => {
    // Replace the fetch call with Axios to make a GET request to the specified API endpoint
    axios.get("https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud")
      .then((response) => {
        setData(response.data); // Update 'data' state with the fetched data
      })
      .catch((error) => console.error("Error fetching data: ", error)); // Handle errors if the request fails
  };

  // Render the components and HTML elements for the application
  return (
    <div className="bg-info container">
      <Navbar /> {/* Render the Navbar component */}
      <Welcome /> {/* Render the Welcome component */}
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="CRUD-container">
            <Create fetchAndDisplayData={fetchAndDisplayData} /> {/* Render the Create component and pass a function as a prop */}
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="CRUD-container">
            <Read data={data} setSelectedId={setSelectedId} /> {/* Render the Read component and pass data and a function as props */}
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="CRUD-container">
            <Update selectedId={selectedId} fetchAndDisplayData={fetchAndDisplayData} /> {/* Render the Update component and pass props */}
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="CRUD-container">
            <Delete selectedId={selectedId} fetchAndDisplayData={fetchAndDisplayData} /> {/* Render the Delete component and pass props */}
          </div>
        </div>
      </div>
      <div className="MJ-container custom-form mt-4">
        <Monkeyjokes /> {/* Render the Monkeyjokes component */}
      </div>
    </div>
  );
}

// Export the 'App' component as the default export of this module
export default App;
