/** @format */

import { useContext, useState } from 'react';
import { ThemeContext } from 'App';
import styles from 'views/pages/homePage/homePage.module.css';
import profile from 'assets/profile.jpg';
// import { ReactComponent as ArrowDropUpIcon } from 'assets/ArrowDropUpIcon.svg';
// import { ReactComponent as ArrowRightIcon } from 'assets/ArrowRightIcon.svg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';
const Footer = () => {
  const theme = useContext(ThemeContext);
  const { Width } = useWindowDimensions();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: Width > 769 ? 'space-between' : 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20,
        borderTop: `2px  dotted ${theme.color}`,
        paddingTop: 50,
      }}
    >
      <div style={{ color: theme.color }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Mojahidul Islam
        </p>
        <p style={{ color: theme.color, fontSize: 20 }}>Software Engineer</p>
        <i style={{ color: theme.color, fontSize: 20 }}>Dhaka, Bangladesh</i>
      </div>
      <div>
        <p style={{ color: theme.color, fontSize: 18, fontWeight: 500 }}>Contact</p>
        <div style={{ margin: '8px 0' }}>
          <a
            style={{
              margin: '20px 0',
              textDecoration: 'none',
              color: 'rgb(47, 119, 173)',
              fontSize: 16,
              fontWeight: 500,
            }}
            href='mailto:mojahid.dev@gmail.com'
            title='Mail to'
          >
            mojahid.dev@gmail.com
          </a>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}
        >
          <GitHubIcon sx={{ color: theme.color, fontSize: 30 }} />
          <LinkedInIcon sx={{ color: theme.color, fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
