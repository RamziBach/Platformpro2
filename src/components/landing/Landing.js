import React, { useContext } from 'react';

import { themeContext } from '../context/ThemeContextProvider';

const Landing = props => {
  const { darkMode } = useContext(themeContext);

  return (
    <div
      className="landing sm_section-spacing"
      style={{ backgroundColor: darkMode ? '#233343' : '#fbe0ca' }}
    >
      {props.children}
    </div>
  );
};

export default Landing;
