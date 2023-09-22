import React, { useState } from 'react'; // Import React and useState
import axios from 'axios'; // Import Axios for HTTP requests

function Read({ data, setSelectedId }) {
  const [id, setId] = useState(''); // Initialize a state variable 'id' with an empty string

  // Function to handle reading data
  const handleRead = () => {
    axios
      .get(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${id}`)
      .then((response) => {
        console.log('Response:', response); // Log the response from the API
        if (response.status === 200) {
          setSelectedId(id); // Set the selected ID to the 'id' state
        } else {
          console.error('Data not found'); // Log an error if data is not found
        }
      })
      .catch((error) => console.error('Error reading data: ', error)); // Log an error if there's an issue with the API request
  };

  return (
    <div className="text-center">
      <button
        id="Read"
        type="submit"
        title="After Inputting an ID, the Software Reads, Pulls and Displays Data Below"
        className="btn-lg mt-3 btn btn text-white p-2 m-3"
        onClick={handleRead}
      >
        Read
      </button>

      <div className="mb-3 col-12">
        <input
          id="id"
          type="text"
          className="form-control border border-5 border-info p-2"
          placeholder="ID#" // Placeholder text for the input field
          value={id} // Bind the 'value' of the input field to the 'id' state
          onChange={(e) => setId(e.target.value)} // Update the 'id' state when the input value changes
        />
      </div>
    </div>
  );
}

export default Read;

// Bootstrap Styling Explanation:
// Button Styling:
// - "btn-lg": Makes the button large.
// - "mt-3": Adds top margin for spacing.
// - "btn": Specifies it's a Bootstrap button.
// - "text-white": Sets the text color to white.
// - "p-2": Adds padding on all sides of the button.
// - "m-3": Adds margin around the button.

// Input Field Styling:
// - "form-control": Defines a form control element.
// - "border": Adds a border to the element.
// - "border-5": Sets the border width to 5 pixels.
// - "border-info": Sets the border color to Bootstrap's "info" color (usually blue).
// - "p-2": Adds padding inside the input field.