import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import MediaQuery from 'react-responsive';
import headerLogo from '../images/main_logo.svg'


export default class NavigationMobile extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  constructor(){
    super();
    this.state = {
      displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  render() {
    return (
      <MediaQuery maxDeviceWidth={991.98}>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <Link to="/" className="navigation__logo" onClick={this.scrollToTop}>
              <img src={headerLogo} alt="brand-logo" className="navigation__logo_img" />
            </Link>
            { this.state.displayMenu ? (
            <div className="navigation__menu">
              <Link to="home" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Home</Link>
              <Link to="skills" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Skills</Link>
              <Link to="about" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">About</Link>
              <Link to="testimonials" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Testimonials</Link>
              <Link to="contact" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Contact</Link>
            </div>
            ):
            (
              null
            )
            }
            <div className="burger" onClick={this.showDropdownMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
      </MediaQuery>
    );
  }
}