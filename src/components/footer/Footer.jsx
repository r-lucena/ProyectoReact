import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Develhope Team 2. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
