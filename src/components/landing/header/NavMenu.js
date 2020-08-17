import React from 'react';
import { SectionLink } from 'react-scroll-section';
import 'animate.css';

import darkLogo from '../../../images/logo-dark.svg';
// import lightLogo from '../../../images/light-logo_sm.svg';

const NavMenu = props => {
  return (
    <div
      className="mobile-nav animate__animated animate__slideInRight animate__faster"
      style={{
        display: props.isOpen ? 'block' : 'none',
      }}
    >
      <ul>
        <li onClick={props.handleClose}>
          <SectionLink section="home">
            {({ onClick, isSelected }) => (
              <img
                onClick={onClick}
                selected={isSelected}
                className="logo mobile-nav_logo"
                src={darkLogo}
                alt="logo"
              />
            )}
          </SectionLink>
        </li>
        <li onClick={props.handleClose}>
          <SectionLink section="about">
            {({ onClick, isSelected }) => (
              <button
                onClick={onClick}
                selected={isSelected}
                className="menu-btn_mobile-nav"
              >
                about
              </button>
            )}
          </SectionLink>
        </li>
        <li onClick={props.handleClose}>
          <SectionLink section="builder">
            {({ onClick, isSelected }) => (
              <button
                onClick={onClick}
                selected={isSelected}
                className="menu-btn_mobile-nav"
              >
                builder
              </button>
            )}
          </SectionLink>
        </li>
        <li onClick={props.handleClose}>
          <SectionLink section="features">
            {({ onClick, isSelected }) => (
              <button
                onClick={onClick}
                selected={isSelected}
                className="menu-btn_mobile-nav"
              >
                features
              </button>
            )}
          </SectionLink>
        </li>
        <li onClick={props.handleClose}>
          <button className="menu-btn_mobile-nav">blog</button>
        </li>
        <li onClick={props.handleClose}>
          <button className="menu-btn_mobile-nav">brand</button>
        </li>
      </ul>
      <span onClick={props.handleClick} className="close-container">
        <i className="close fas fa-times"></i>
      </span>
    </div>
  );
};

export default NavMenu;
