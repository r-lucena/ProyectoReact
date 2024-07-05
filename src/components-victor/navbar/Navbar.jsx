import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import BasicDropdown from '../dropdown/BasicDropdown';

const navbarDropdown = [
  {
    item: "Games",
    href: "#/games"
  },
  {
    item: "Survey",
    href: "#/survey"
  },
  {
    item: "Games of the month",
    href: "#/games-of-the-month"
  },
]

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="navbar">
      <div className='no-list-style'>
        <div className="navbar-brand">

          <a href="#"><img src="./src/assets/logos/logoSVG.svg" width={150} alt="logo" /></a>
        </div>
        <BasicDropdown btnName={"Links"} objectsArray={navbarDropdown} />
      </div>

      <ul className="other-links">
        <li className="navbar-item"><a href="/about">About</a></li>
        <li className="navbar-item"><a href="/services">Services</a></li>
        <li className="navbar-item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;