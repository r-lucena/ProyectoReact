import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';
import BasicDropdown from '../dropdown/BasicDropdown';

const navbarDropdown = [
  {
    item: "Home",
    href: "/"
  },
  {
    item: "Game finder",
    href: "/game-finder"
  },
  {
    item: "Coming soon",
    href: "/coming-soon"
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
        <BasicDropdown className="dropdown" btnName={"Links"} objectsArray={navbarDropdown} />
        <div className='links'>
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/game-finder">Game finder</a></li>
        </div>
      </div>

      <ul className="other-links">
        <li className="navbar-item"><a href="/coming-soon">Coming soon</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;