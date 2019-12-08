import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import MediaQuery from 'react-responsive';
import headerLogo from '../images/main_logo.svg'


export default class Navigation extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <MediaQuery minDeviceWidth={991.97}>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <Link to="/" className="navigation__logo" onClick={this.scrollToTop}>
              <img src={headerLogo} alt="brand-logo" className="navigation__logo_img" />
            </Link>
            <div className="navigation__menu">
              <Link to="home" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Home</Link>
              <Link to="skills" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Skills</Link>
              <Link to="about" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">About</Link>
              <Link to="testimonials" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Testimonials</Link>
              <Link to="contact" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Contact</Link>
            </div>
          </nav>
        </div>
      </header>
      </MediaQuery>
    );
  }
}