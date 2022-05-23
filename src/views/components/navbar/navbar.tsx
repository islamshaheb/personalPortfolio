/** @format */

import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
import { BsBrightnessLow } from 'react-icons/bs';
import { BsBrightnessHigh } from 'react-icons/bs';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import RssFeedSharpIcon from '@mui/icons-material/RssFeedSharp';
import { Theme } from 'model/varable';
import { dark, light } from 'helpers/variable';
interface props {
  changeTheme: Dispatch<SetStateAction<Theme>>;
}
const Navbar = (props: props) => {
  const { Width } = useWindowDimensions();
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>(dark);

  useEffect(() => {
    const darkMode: any = localStorage.getItem('darkMode');
    if (darkMode == null) localStorage.setItem('darkMode', 'dark');
    else {
      if (darkMode === 'dark') {
        setDarkMode(true);
        setTheme(dark);
      } else {
        setDarkMode(false);
        setTheme(light);
      }
    }
  }, [darkMode]);

  const changeTheme = () => {
    if (darkMode) props.changeTheme(light);
    else props.changeTheme(dark);
    if (darkMode) localStorage.setItem('darkMode', 'light');
    else localStorage.setItem('darkMode', 'dark');
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        height: Width <= 768 ? 70 : '20vh',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
        }}
      >
        <div>
          <button
            style={{
              color: '#2f77ad',
              fontSize: 30,
              fontWeight: 600,
              background: 'inherit',
            }}
          >
            Mojahidul Islam
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: 40,
          }}
        >
          <div style={{ cursor: 'pointer' }} onClick={changeTheme}>
            {darkMode ? (
              <WbSunnySharpIcon sx={{ color: theme.color }} />
            ) : (
              <DarkModeSharpIcon sx={{ color: theme.color }} />
            )}
          </div>
          <div style={{ color: 'black' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                cursor: 'pointer',
              }}
            >
              <RssFeedSharpIcon sx={{ color: theme.color }} />
              <div style={{ color: theme.color }}>Blog</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
