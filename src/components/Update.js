// Import React and necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

// Define the Update component
function Update({ selectedId, fetchAndDisplayData }) {
  // Define state variables for name, email, and notes
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Load data for the selected ID when it changes
  useEffect(() => {
    if (selectedId) {
      // Make a GET request to fetch the data for the selected ID
      axios.get(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${selectedId}`)
        .then((response) => {
          if (response.status === 200) {
            // Populate the input fields with the retrieved data
            setName(response.data.name);
            setEmail(response.data.email);
            setNotes(response.data.notes);
          } else {
            console.error('Data not found');
          }
        })
        .catch((error) => console.error('Error fetching data: ', error));
    }
  }, [selectedId]);

  // Define the handleUpdate function for updating data
  const handleUpdate = () => {
    // Create an object with the updated data
    const updatedData = {
      name: name,
      email: email,
      notes: notes,
    };

    // Make a PUT request to update the data with the specified ID
    axios.put(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${selectedId}`, updatedData)
      .then((response) => {
        if (response.status === 200) {
          // If the update was successful, call fetchAndDisplayData to update the list
          fetchAndDisplayData();
        } else {
          console.error('Failed to update data');
        }
      })
      .catch((error) => console.error('Error updating data: ', error));
  };

  // Return the JSX for the Update component
  return (
    <div className="text-center">
      {/* Button for updating data */}
      <button
        id="Update"
        type="submit"
        title="After Using the Read Button You Can Make Changes and Submit Changes to Database"
        className="btn-lg mt-3 btn outline-info text-white p-2 m-3"
        onClick={handleUpdate}
      >
        Update
      </button>

      {/* Form fields for name, email, and notes */}
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="mb-3 col-12">
          {/* Input field for name */}
          <input
            id="name"
            type="text"
            className="form-control border border-5 border-info p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 col-12">
          {/* Input field for email */}
          <input
            id="email"
            type="email"
            className="form-control border border-5 border-info p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 col-12">
          {/* Textarea field for notes */}
          <textarea
            className="form-control border border-5 border-info p-2"
            id="textarea"
            rows="4"
            maxLength="200"
            placeholder="Notes (up to 200 characters)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// Export the Update component as the default export of this module
export default Update;


// Bootstrap Styling Explanation:
// Button Styling:
// - "btn-lg": Makes the button large.
// - "mt-3": Adds top margin for spacing.
// - "btn": Specifies it's a Bootstrap button.
// - "outline-info": Sets the button outline color to Bootstrap's "info" color.
// - "text-white": Sets the text color to white.
// - "p-2": Adds padding on all sides of the button.
// - "m-3": Adds margin around the button.

// Input and Textarea Field Styling:
// - "form-control": Defines a form control element.
// - "border": Adds a border to the element.
// - "border-5": Sets the border width to 5 pixels.
// - "border-info": Sets the border color to Bootstrap's "info" color.
// - "p-2": Adds padding inside the input and textarea fields.