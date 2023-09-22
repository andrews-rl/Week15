import React from 'react'; // Import React

function Welcome() {
  // Create a new Date object to get the current date and time
  const date = new Date();

  // Define an object called 'singleUser' with properties for name, date, and time
  const singleUser = {
    name: 'Promineo Tech Team',                 // A property for the user's name
    date: date.toDateString(),                  // A property for the current date
    time: date.toLocaleTimeString(),            // A property for the current time
  };

  return (
    <section className="WelcomeSection">
      <div className="container text-center">
        <h1 className="display-4">Welcome {singleUser.name}</h1>
        <p className="lead">Today is {singleUser.date}. The time is {singleUser.time}.</p>
      </div>
    </section> // Return JSX for the Welcome component
  );
}

export default Welcome; // Export the Welcome component as the default export of this module

/* Bootstrap Styling Explanation:
- "WelcomeSection": Custom CSS class for styling this section.
- "container": Bootstrap class for creating a container with centered content.
- "display-4": Bootstrap class for displaying a large heading.
- "lead": Bootstrap class for styling a paragraph with larger, bold text.
*/
