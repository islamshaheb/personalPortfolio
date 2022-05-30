/** @format */

import { useContext, useState } from 'react';
import { ThemeContext } from 'App';
import styles from 'views/pages/homePage/homePage.module.css';
import profile from 'assets/profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { ReactComponent as ArrowDropUpIcon } from 'assets/ArrowDropUpIcon.svg';
// import { ReactComponent as ArrowRightIcon } from 'assets/ArrowRightIcon.svg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';

const Contests = () => {
  const theme = useContext(ThemeContext);
  const { Width } = useWindowDimensions();

  return (
    <div style={{ display: 'flex', gap: '5%', flexWrap: 'wrap', width: '100%' }}>
      <div style={{ color: theme.color, width: Width > 768 ? '30%' : '100%' }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Contest and problem solved
        </p>
        <p className={styles.skillDiv} style={{ color: theme.color }}>
          Total number of problems I've solved so far in different online problem solved platform.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 25,
          flexWrap: 'wrap',
          flexDirection: 'column',
          width: Width > 768 ? '65%' : '100%',
        }}
      >
        <div
          className={theme.dark ? styles.expBoxDark : styles.expBoxLight}
          style={{
            background: theme.dark ? '#1f2937' : '#f7f7f7',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 15 }}
          >
            <img src={profile} height={40} width={40} alt='not supported Images' />

            <div>
              <p className={styles.projectName} style={{ color: theme.color }}>
                Codeforces
              </p>
              <div style={{ color: theme.color, fontSize: 16 }}>
                <a href='ww.com' style={{ color: '#359dfd', textDecoration: 'none' }}>
                  {' '}
                  Profile{' '}
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: 55 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 5,
              }}
            >
              <p style={{ color: theme.dark ? '#B69473' : '#7F331F', fontWeight: 500 }}>
                Total problem solve:
              </p>
              <p style={{ color: theme.color }}>400</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 5,
              }}
            >
              <p style={{ color: theme.dark ? '#B69473' : '#7F331F', fontWeight: 500 }}>
                Participated in contests:
              </p>
              <p style={{ color: theme.color }}>100</p>
            </div>
          </div>
          {/* NEw div */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 15,
              marginTop: 17,
            }}
          >
            <img src={profile} height={40} width={40} alt='not supported Images' />
            <div>
              <p className={styles.projectName} style={{ color: theme.color }}>
                Codeforces
              </p>
              <div style={{ color: theme.color, fontSize: 16 }}>
                <a href='ww.com' style={{ color: '#359dfd', textDecoration: 'none' }}>
                  {' '}
                  Profile{' '}
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: 55 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 5,
              }}
            >
              <p style={{ color: theme.dark ? '#B69473' : '#7F331F', fontWeight: 500 }}>
                Total problem solve:
              </p>
              <p style={{ color: theme.color }}>400</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 5,
              }}
            >
              <p style={{ color: theme.dark ? '#B69473' : '#7F331F', fontWeight: 500 }}>
                Participated in contests:
              </p>
              <p style={{ color: theme.color }}>100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;
