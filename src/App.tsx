/** @format */

import { dark, light } from 'helpers/variable';
import { Theme } from 'model/varable';

import React, { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from 'views/components/navbar/navbar';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
import HomePage from 'views/pages/homePage/homePage';
export const ThemeContext = createContext(dark);

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>(dark);
  const { Width } = useWindowDimensions();

  useEffect(() => {
    const darkMode: any = localStorage.getItem('darkMode');
    if (darkMode == null) localStorage.setItem('darkMode', 'dark');
    else {
      if (darkMode === 'dark') setTheme(dark);
      else setTheme(light);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: theme.background, paddingInline: 10 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ visibility: 'hidden', height: Width >= 550 ? 40 : 20 }}></div>
          <div style={{ position: 'sticky', top: 0 }}>
            {' '}
            <Navbar changeTheme={setTheme} />
          </div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage theme={theme} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
