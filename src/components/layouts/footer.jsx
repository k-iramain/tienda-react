import React from "react";
import "../../assets/scss/components/layouts/_footer.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/k-iramain/tienda-react"
          target="_blank"
        >
          Github
        </a>
        <span> / </span>
        <a href="mailto:karina.iramain90@gmail.com" target="_blank">
          Necesitas contactarme?
        </a>
        <span> / </span>
      </p>
      <p>
        &copy; {currentYear} <strong>Veggies</strong> - Tienda vegana
      </p>
    </footer>
  );
};

export default Footer;