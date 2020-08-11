import React, { useContext } from 'react';
import { SectionLink } from 'react-scroll-section';
import 'animate.css';

import { themeContext } from '../../context/ThemeContextProvider';

import darkLogo from '../../../images/logo-dark.svg';
import lightLogo from '../../../images/light-logo_sm.svg';

const NavMenu = props => {
  const { darkMode } = useContext(themeContext);
  return (
    <div
      className="mobile-nav animate__animated animate__slideInRight animate__faster"
      style={{
        display: props.isOpen ? 'block' : 'none',
        backgroundColor: darkMode ? '#101820' : '#eef2f6',
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
                src={darkMode ? lightLogo : darkLogo}
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
                style={{ color: darkMode ? '#eef2f6' : '#101820' }}
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
                style={{ color: darkMode ? '#eef2f6' : '#101820' }}
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
                style={{ color: darkMode ? '#eef2f6' : '#101820' }}
                className="menu-btn_mobile-nav"
              >
                features
              </button>
            )}
          </SectionLink>
        </li>
        <li onClick={props.handleClose}>
          <button
            style={{ color: darkMode ? '#eef2f6' : '#101820' }}
            className="menu-btn_mobile-nav"
          >
            blog
          </button>
        </li>
        <li onClick={props.handleClose}>
          <button
            style={{ color: darkMode ? '#eef2f6' : '#101820' }}
            className="menu-btn_mobile-nav"
          >
            brand
          </button>
        </li>
      </ul>
      <span onClick={props.handleClick} className="close-container">
        <i className="close fas fa-times"></i>
      </span>
    </div>
  );
};

export default NavMenu;
