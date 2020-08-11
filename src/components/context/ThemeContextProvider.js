import React, { useState } from 'react';

const themeContext = React.createContext();

const ThemeContextProvider = props => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState);
  };

  return (
    <themeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </themeContext.Provider>
  );
};

export { ThemeContextProvider, themeContext };
