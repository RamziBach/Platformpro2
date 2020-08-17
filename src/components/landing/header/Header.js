import React, { useEffect, useRef, useState } from 'react';
import Headroom from 'react-headroom';
import { SectionLink, Section } from 'react-scroll-section';

import NavMenu from './NavMenu';

import darkLogo from '../../../images/logo-dark.svg';
import lightLogo from '../../../images/light-logo_sm.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // const scrollFunction = () => {
  //   if (
  //     document.body.scrollTop > 120 ||
  //     document.documentElement.scrollTop > 120
  //   ) {
  //     headerRef.current.style.backgroundColor = '#eef2f6';
  //     headerRef.current.style.borderBottom = '1px solid #d0d4d9';
  //   } else {
  //     headerRef.current.style.backgroundColor = '#1a2633';
  //     headerRef.current.style.borderBottom = 'none';
  //   }
  // };

  // useEffect(() => {
  //   window.onscroll = () => scrollFunction();
  // }, []);

  return (
    <>
      <Section id="home">
        <Headroom className="smMD_section-spacing">
          <header ref={headerRef}>
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
                          src={lightLogo}
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
                          >
                            features
                          </button>
                        )}
                      </SectionLink>
                    </li>
                    <li>
                      <button className="menu-btn">blog</button>
                    </li>
                    <li>
                      <button className="menu-btn">brand</button>
                    </li>
                  </ul>
                </div>
                <div id="desktop-nav2" className="header-child2">
                  <ul className="header-ul">
                    <li>
                      <button className="header-btn_border">log in</button>
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
                          src={darkLogo}
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
