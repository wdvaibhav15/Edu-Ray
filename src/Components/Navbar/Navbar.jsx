import React ,{useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt=""  className="logo"/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
