import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import monkeyImage from './monkeyt.jpg'; // Import the monkey image
import Form from 'react-bootstrap/Form'; // Import Form component from React Bootstrap
import Button from 'react-bootstrap/Button'; // Import Button component from React Bootstrap

function Monkeyjokes() {
  // Declare a state variable 'joke' and a function to update it, initialize with an empty string
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // Use the useEffect hook to fetch a random programming joke and set it to 'joke' state variable
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist')
      .then((response) => response.json())
      .then((data) => setJoke(data.joke))
      .catch((error) => console.error('Error fetching joke: ', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="mt-4">
      <h2 className="text-center">Jokes</h2>
      {/* Create a Form element with Bootstrap styling */}
      <Form className="text-center">
        <Form.Group className="p-3">
          {/* Display the monkey image */}
          <img src={monkeyImage} alt="Prophet Monkey" className="monkey-image img-fluid" />
        </Form.Group>
        <Form.Group>
          {/* Display the fetched joke */}
          <p>{joke}</p>
        </Form.Group>
        {/* Create a Bootstrap Button component with variant "info" */}
        <Button variant="info" onClick={() => window.location.reload()}>
          Another Joke
        </Button>
      </Form>
    </div>
  );
}

export default Monkeyjokes; // Export the Monkeyjokes component as the default export of this module
