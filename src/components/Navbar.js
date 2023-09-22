import { Dropdown, DropdownButton } from 'react-bootstrap';

function Navbar() {
  return (
    // Create a navigation bar with Bootstrap classes for styling
    <nav className="navBar d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {/* Create a navigation link for the "Home" page */}
        <div className="m-3">
          <a href="/" className="text-info text-decoration-none nav-link">
            Home
          </a>
        </div>
        {/* Create a navigation link for the "Portfolio" page */}
        <div className="m-3">
          <a href="/portfolio" className="text-info text-decoration-none nav-link">
            Portfolio
          </a>
        </div>
        {/* Create a navigation link for the "Contact" page */}
        <div className="m-3">
          <a href="/contact" className="text-info text-decoration-none nav-link">
            Contact
          </a>
        </div>
      </div>

      {/* Create a dropdown menu labeled "More" */}
      <DropdownButton title="More" variant="info" className="m-3">
        {/* Create dropdown items for "Home," "Portfolio," and "Contact" */}
        <Dropdown.Item href="/" className="nav-link2">Home</Dropdown.Item>
        <Dropdown.Item href="/portfolio" className="nav-link2">Portfolio</Dropdown.Item>
        <Dropdown.Item href="/contact" className="nav-link2">Contact</Dropdown.Item>
      </DropdownButton>
    </nav>
  );
}

export default Navbar;

