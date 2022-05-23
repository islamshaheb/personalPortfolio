/** @format */

import { dark, light } from 'helpers/variable';
import { Theme } from 'model/varable';

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from 'views/components/navbar/navbar';
import HomePage from 'views/pages/homePage/homePage';
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>(dark);

  useEffect(() => {
    const darkMode: any = localStorage.getItem('darkMode');
    console.log({ darkMode });
    if (darkMode == null) localStorage.setItem('darkMode', 'dark');
    else {
      if (darkMode === 'dark') setTheme(dark);
      else setTheme(light);
    }
  }, [theme]);

  return (
    <div style={{ background: theme.background }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Navbar changeTheme={setTheme} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage theme={theme} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
