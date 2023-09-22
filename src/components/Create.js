import React, { useState } from 'react'; // Import React and the useState hook
import axios from 'axios'; // Import Axios library for making HTTP requests

function Create({ fetchAndDisplayData }) {
  // Initialize state variables for name, email, and notes using useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Function to handle the creation of a new contact
  const handleCreate = () => {
    // Create a new contact object with the provided data
    const newContact = {
      name: name,
      email: email,
      notes: notes,
    };

    // Send a POST request to your API endpoint to create the new contact
    axios.post('https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud', newContact, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 201) {
          // If the creation was successful, call fetchAndDisplayData to update the list
          fetchAndDisplayData();

          // Clear input fields after successful creation
          setName('');
          setEmail('');
          setNotes('');
        } else {
          console.error('Failed to create contact');
        }
      })
      .catch((error) => console.error('Error creating contact: ', error));
  };

  return (
    <div className="text-center">
      {/* Create a button with Bootstrap classes for styling */}
      <button
        id="Create"
        type="submit"
        title="Updates Database With New Contact Info"
        className="btn-lg mt-3 btn text-white p-2 m-3"
        onClick={handleCreate}
      >
        Create
      </button>
      {/* Create a container for centering the form using flexbox */}
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="mb-3 col-12">
          {/* Create an input field for the 'name' */}
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
          {/* Create an input field for the 'email' */}
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
          {/* Create a textarea for the 'notes' */}
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

export default Create; // Export the Create component as the default export of this module

// Bootstrap Styling Explanation:
// The button with the "Create" label is styled using Bootstrap classes:
// - "btn-lg": Makes the button large.
// - "mt-3": Adds top margin for spacing.
// - "btn": Specifies it's a Bootstrap button.
// - "btn-info": Sets the button color to the info theme color.
// - "text-white": Sets the text color to white.
// - "p-2": Adds padding on all sides of the button.
// - "m-3": Adds margin around the button.

// The form inputs and textarea are styled using Bootstrap classes:
// - "form-control": Makes the input elements appear as form controls.
// - "border": Adds a border to the form controls.
// - "border-5": Sets the border thickness to a higher value.
// - "border-info": Sets the border color to the info theme color.
// - "p-2": Adds padding inside the form controls.

// The container for the form is centered using flexbox with the classes:
// - "d-flex": Makes the container a flex container.
// - "justify-content-center": Centers the content horizontally.
// - "flex-column": Arranges child elements in a column.
// - "align-items-center": Centers child elements vertically.
// - "mb-3": Adds margin at the bottom of each form element.
// - "col-12": Sets each form element to full width on small screens.
