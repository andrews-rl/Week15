import React from 'react'; // Import React library
import axios from 'axios'; // Import Axios library for making HTTP requests

function Delete({ selectedId, fetchAndDisplayData }) {
  // Function to handle the deletion of data
  const handleDelete = () => {
    if (selectedId) {
      // Make a DELETE request to remove the data with the specified ID
      axios.delete(`https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud/${selectedId}`)
        .then((response) => {
          if (response.status === 200) {
            // If the delete was successful, call fetchAndDisplayData to update the list
            fetchAndDisplayData();
          } else {
            console.error('Failed to delete data');
          }
        })
        .catch((error) => console.error('Error deleting data: ', error));
    }
  };

  return (
    <div className="text-center">
      {/* Create a button with Bootstrap classes for styling */}
      <button
        id="Delete"
        type="submit"
        title="Deletes Data with the Selected ID from Database"
        className="btn-lg mt-3 btn btn text-white p-2 m-3"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete; // Export the Delete component as the default export of this module

// Bootstrap Styling Explanation:
// The button with the "Delete" label is styled using Bootstrap classes:
// - "btn-lg": Makes the button large.
// - "mt-3": Adds top margin for spacing.
// - "btn": Specifies it's a Bootstrap button.
// - "text-white": Sets the text color to white.
// - "p-2": Adds padding on all sides of the button.
// - "m-3": Adds margin around the button.

// This component provides a button to delete data with the selected ID from the database
// when the button is clicked. It uses Axios to send a DELETE request to the specified API endpoint.
// If the delete operation is successful, it calls the fetchAndDisplayData function to update the list.
