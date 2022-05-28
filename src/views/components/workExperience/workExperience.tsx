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
import { spawn } from 'child_process';
const WorkExperience = () => {
  const [showingMore, setShowMore] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  const getMonthDifference = (startDate: Date, endDate: Date): number => {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  };

  const firstExpTime = getMonthDifference(new Date('2021-04-01'), new Date('2021-08-01'));

  const currentExpTime = getMonthDifference(new Date('2021-09-01'), new Date());
  return (
    <div style={{ display: 'flex', gap: '5%', flexWrap: 'wrap', width: '100%' }}>
      <div style={{ color: theme.color, width: '30%' }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Work experience
        </p>
        <p style={{ color: theme.color }}>List of companies I worked for.</p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 25,
          flexWrap: 'wrap',
          flexDirection: 'column',
          width: '65%',
        }}
      >
        <div
          className={theme.dark ? styles.expBoxDark : styles.expBoxLight}
          style={{
            background: theme.dark ? '#1f2937' : '#f7f7f7',
            display: 'flex',
            gap: 15,
            flexDirection: 'column',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 15 }}
          >
            <img src={profile} height={40} width={40} alt='not supported Images' />

            <div>
              <p className={styles.projectName} style={{ color: theme.color }}>
                This is Role Name at{' '}
                <a href='ww.com' style={{ color: '#359dfd', textDecoration: 'none' }}>
                  {' '}
                  Name of company{' '}
                </a>
              </p>
              <p style={{ color: theme.color, fontSize: 16 }}>
                Location -{' '}
                <i>
                  September 2021 to Present ({' '}
                  {currentExpTime / 12 >= 1 ? (
                    <span>{Math.floor(currentExpTime / 12)} Year </span>
                  ) : null}
                  {currentExpTime % 12 > 0 ? <span> {currentExpTime % 12} Months </span> : null})
                </i>
              </p>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <GitHubIcon sx={{ color: theme.color }} />

            <a
              style={{ color: theme.color, textDecoration: 'none' }}
              href='https://imagecolorpicker.com/'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>

          <a
            style={{ color: '#359dfd', fontWeight: 500, textDecoration: 'none' }}
            href='https://imagecolorpicker.com/'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>

          <p style={{ color: theme.color, textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus modi
            cupiditate quae, ducimus totam, ea alias impedit iusto saepe labore in iure incidunt,
            voluptas obcaecati culpa quas beatae fugit.
          </p>
          <div
            style={{
              display: 'flex',
              // gap: 2,
              justifyContent: 'flex-start',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setShowMore(!showingMore);
            }}
          >
            {showingMore ? (
              <ArrowDropUpIcon
                fontSize='large'
                sx={{ color: '#359dfd', marginLeft: '-8px', fontSize: '50' }}
              />
            ) : (
              <ArrowRightIcon
                fontSize='large'
                sx={{ color: '#359dfd', marginLeft: '-8px', fontSize: '50' }}
              />
            )}{' '}
            <p style={{ color: '#359dfd' }}> {showingMore ? 'Hide' : 'Show More'}</p>
          </div>
          <div style={{ display: showingMore ? 'inline-block' : 'none', paddingLeft: '6%' }}>
            <ul style={{ color: theme.color, paddingBottom: 10 }}>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus modi
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus modi
              </li>
            </ul>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 8,
              alignContent: 'center',
            }}
          >
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>{' '}
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>
          </div>
        </div>
        <div
          className={theme.dark ? styles.expBoxDark : styles.expBoxLight}
          style={{
            background: theme.dark ? '#1f2937' : '#f7f7f7',
            display: 'flex',
            gap: 15,
            flexDirection: 'column',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 15 }}
          >
            <img src={profile} height={40} width={40} alt='not supported Images' />

            <div>
              <p className={styles.projectName} style={{ color: theme.color }}>
                This is Role Name at{' '}
                <a href='ww.com' style={{ color: '#359dfd', textDecoration: 'none' }}>
                  {' '}
                  Name of company{' '}
                </a>
              </p>
              <p style={{ color: theme.color, fontSize: 16 }}>
                Location -{' '}
                <i>
                  April 2021 to August ({' '}
                  {firstExpTime / 12 >= 1 ? (
                    <span>{Math.floor(firstExpTime / 12)} Year </span>
                  ) : null}
                  {firstExpTime % 12 > 0 ? <span> {firstExpTime % 12} Months </span> : null})
                </i>
              </p>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <GitHubIcon sx={{ color: theme.color }} />

            <a
              style={{ color: theme.color, textDecoration: 'none' }}
              href='https://imagecolorpicker.com/'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>

          <a
            style={{ color: '#359dfd', fontWeight: 500, textDecoration: 'none' }}
            href='https://imagecolorpicker.com/'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>

          <p style={{ color: theme.color, textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus modi
            cupiditate quae, ducimus totam, ea alias impedit iusto saepe labore in iure incidunt,
            voluptas obcaecati culpa quas beatae fugit.
          </p>
          <div
            style={{
              display: 'flex',
              // gap: 2,
              justifyContent: 'flex-start',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setShowMore(!showingMore);
            }}
          >
            {showingMore ? (
              <ArrowDropUpIcon
                fontSize='large'
                sx={{ color: '#359dfd', marginLeft: '-8px', fontSize: '50' }}
              />
            ) : (
              <ArrowRightIcon
                fontSize='large'
                sx={{ color: '#359dfd', marginLeft: '-8px', fontSize: '50' }}
              />
            )}{' '}
            <p style={{ color: '#359dfd' }}> {showingMore ? 'Hide' : 'Show More'}</p>
          </div>
          <div style={{ display: showingMore ? 'inline-block' : 'none', paddingLeft: '6%' }}>
            <ul style={{ color: theme.color, paddingBottom: 10 }}>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus modi
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus modi
              </li>
            </ul>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 8,
              alignContent: 'center',
            }}
          >
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>{' '}
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Javascript
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
