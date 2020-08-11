import React, { useEffect, useRef, useContext, useState } from 'react';
import Headroom from 'react-headroom';
import { SectionLink, Section } from 'react-scroll-section';

import { themeContext } from '../../context/ThemeContextProvider';
import NavMenu from './NavMenu';

import darkLogo from '../../../images/logo-dark.svg';
import lightLogo from '../../../images/light-logo_sm.svg';

const Header = () => {
  const { darkMode } = useContext(themeContext);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      if (!darkMode) {
        headerRef.current.style.backgroundColor = '#eef2f6';
        headerRef.current.style.borderBottom = '1px solid #d0d4d9';
      } else {
        headerRef.current.style.backgroundColor = '#233343';
        headerRef.current.style.borderBottom =
          '1px solid rgba(238, 242, 246, 0.2)';
      }
    } else {
      if (!darkMode) {
        headerRef.current.style.backgroundColor = '#fbe0ca';
        headerRef.current.style.borderBottom = 'none';
      } else {
        headerRef.current.style.backgroundColor = '#233343';
        headerRef.current.style.borderBottom = 'none';
      }
    }
  };

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, [darkMode]);

  return (
    <>
      <Section id="home">
        <Headroom className="smMD_section-spacing">
          <header
            ref={headerRef}
            style={{
              backgroundColor: darkMode ? '#233343' : '#fbe0ca',
              color: darkMode ? '#eef2f6' : '#101820',
            }}
          >
            <div className="lg-container">
              <div className="header-parent">
                <div id="desktop-nav1" className="header-child1">
                  <SectionLink section="home">
                    {({ onClick, isSelected }) => (
                      <div
                        className="header-child_logo-container"
                        onClick={onClick}
                        selected={isSelected}
                      >
                        <img
                          className="header-logo smLogo"
                          src={darkMode ? lightLogo : darkLogo}
                          alt="logo"
                        />
                        <h3 className="header-title">platformpro</h3>
                      </div>
                    )}
                  </SectionLink>
                  <ul className="header-ul header-menu">
                    <li>
                      <SectionLink section="about">
                        {({ onClick, isSelected }) => (
                          <button
                            className="menu-btn"
                            onClick={onClick}
                            selected={isSelected}
                            style={{ color: darkMode ? '#eef2f6' : '#101820' }}
                          >
                            about
                          </button>
                        )}
                      </SectionLink>
                    </li>
                    <li>
                      <SectionLink section="builder">
                        {({ onClick, isSelected }) => (
                          <button
                            className="menu-btn"
                            onClick={onClick}
                            selected={isSelected}
                            style={{ color: darkMode ? '#eef2f6' : '#101820' }}
                          >
                            builder
                          </button>
                        )}
                      </SectionLink>
                    </li>
                    <li>
                      <SectionLink section="features">
                        {({ onClick, isSelected }) => (
                          <button
                            className="menu-btn"
                            onClick={onClick}
                            selected={isSelected}
                            style={{ color: darkMode ? '#eef2f6' : '#101820' }}
                          >
                            features
                          </button>
                        )}
                      </SectionLink>
                    </li>
                    <li>
                      <button
                        className="menu-btn"
                        style={{ color: darkMode ? '#eef2f6' : '#101820' }}
                      >
                        blog
                      </button>
                    </li>
                    <li>
                      <button
                        className="menu-btn"
                        style={{ color: darkMode ? '#eef2f6' : '#101820' }}
                      >
                        brand
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="desktop-nav2" className="header-child2">
                  <ul className="header-ul">
                    <li>
                      <button
                        className="header-btn_border"
                        style={{
                          color: darkMode ? '#eef2f6' : '#101820',
                          border: darkMode
                            ? '1px solid rgba(238, 242, 246, 0.2)'
                            : '1px solid rgba(16, 24, 32, 0.2)',
                        }}
                      >
                        log in
                      </button>
                    </li>
                    <li>
                      <button className="header-btn_bg">sign up</button>
                    </li>
                  </ul>
                </div>

                <div id="mobile-nav1" className="header-child1">
                  <SectionLink section="home">
                    {({ onClick, isSelected }) => (
                      <div
                        className="header-child_logo-container"
                        onClick={onClick}
                        selected={isSelected}
                      >
                        <img
                          className="header-logo smLogo"
                          src={darkMode ? lightLogo : darkLogo}
                          alt="logo"
                        />
                        <h3 className="header-title">platformpro</h3>
                      </div>
                    )}
                  </SectionLink>
                </div>
                <div id="mobile-nav2" className="header-child2">
                  <span onClick={() => setOpen(true)}>
                    <i className="hamburger fas fa-bars"></i>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </Headroom>
      </Section>
      <NavMenu
        isOpen={open}
        handleClick={() => setOpen(false)}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default Header;
