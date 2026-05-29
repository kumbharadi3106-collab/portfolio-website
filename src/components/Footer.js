import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Made by Aditya Kumbhar
      </p>
    </footer>
  );
}

export default Footer;
