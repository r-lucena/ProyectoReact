import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import BasicDropdown from '../dropdown/BasicDropdown';

const navbarDropdown = [
  {
    item: "Juegos",
    href: "#/juegos"
  },
  {
    item: "Encuesta",
    href: "#/encuesta"
  },
  {
    item: "Juegos del mes",
    href: "#/juegos-del-mes"
  },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">MyLogo</a>
          <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
        <li>
      <BasicDropdown btnName={"Enlaces"} objectsArray={navbarDropdown}/>

    {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton> */}


          </li>
          <li className="navbar-item"><a href="/about">About</a></li>
          <li className="navbar-item"><a href="/services">Services</a></li>
          <li className="navbar-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;