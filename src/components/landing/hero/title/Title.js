import React, { useContext } from 'react';

import { themeContext } from '../../../context/ThemeContextProvider';

const Title = () => {
  const { darkMode, toggleDarkMode } = useContext(themeContext);

  return (
    <div
      className="title-container"
      style={{
        color: darkMode ? '#eef2f6' : '#101820',
        transition: 'all 1s',
      }}
    >
      <div className="title-container_orb">
        <h2 className="title">
          The web <br /> design platform <br /> for content creators
        </h2>
        <ul className="title-orb">
          <li
            className="dark-mode"
            onClick={toggleDarkMode}
            style={{
              background: darkMode ? '#eef2f6' : '#101820',
              boxShadow: darkMode
                ? '0 0 15px #eef2f6, 0 0 15px -5px #eef2f6'
                : '0 0 15px #101820, 0 0 15px -5px #101820',
            }}
          ></li>
        </ul>
      </div>
      <p className="title-p">
        Whether you’re brand new or breaking into the top 10, Platformpro’s
        tools and services will help make streaming your main source of income.
        We’ll help you, grow, manage and monetize your brand to make a living
        doing what you love.
      </p>
      <button className="btn-bg">get started</button>
    </div>
  );
};

export default Title;
