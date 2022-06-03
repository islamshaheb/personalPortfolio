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
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';
const WorkExperience = () => {
  const [showingMore, setShowMore] = useState<boolean>(false);
  const [showingMore2, setShowMore2] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  const { Width } = useWindowDimensions();

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
      <div style={{ color: theme.color, width: Width > 768 ? '30%' : '100%' }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Work experience
        </p>
        <p className={styles.skillDiv} style={{ color: theme.color }}>
          List of companies I worked for.
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
                Software engineer at{' '}
                <a
                  href='https://www.ambalait.com/public/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                >
                  {' '}
                  Ambala It{' '}
                </a>
              </p>
              <p style={{ color: theme.color, fontSize: 16 }}>
                Remote -{' '}
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

          <p className={styles.allPara} style={{ color: theme.color, textAlign: 'justify' }}>
            Joined as a full-stack web developer. Currently working on operation related stuff.
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
                Develop full notification system on React Native
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                Develop fully customizable admin site for car selling company.
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                Develop two car selling online site.
                <ul>
                  <li
                    style={{
                      color: theme.color,
                      paddingBottom: 10,
                      textAlign: 'justify',
                      marginLeft: 25,
                      marginTop: 10,
                    }}
                  >
                    <a
                      href='http://test.customer2.foyob.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#359dfd', textDecoration: 'none' }}
                    >
                      Website 1
                    </a>
                  </li>
                  <li
                    style={{
                      color: theme.color,
                      paddingBottom: 10,
                      textAlign: 'justify',
                      marginLeft: 25,
                    }}
                  >
                    <a
                      href='http://test.customer1.foyob.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#359dfd', textDecoration: 'none' }}
                    >
                      Website 2
                    </a>
                  </li>
                </ul>
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                Develop landing page for a car selling company
                <ul>
                  <li
                    style={{
                      color: theme.color,
                      paddingBottom: 10,
                      textAlign: 'justify',
                      marginTop: 10,
                      marginLeft: 25,
                    }}
                  >
                    <a
                      href='https://foyob.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#359dfd', textDecoration: 'none' }}
                    >
                      Landing Page
                    </a>
                  </li>
                </ul>
              </li>
              <li>Deployed multiple app in AWS ec2</li>
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
              Typescript
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Node js (Express)
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              React
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              React Native
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              MongoDB
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              AWS
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Material UI
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Nginx
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Bit Bucket
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
                Full Stack Engineer ( Intern ) at{' '}
                <a
                  href='https://springrain.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                >
                  Spring Rain pvt. Ltd.
                </a>
              </p>
              <p style={{ color: theme.color, fontSize: 16 }}>
                Remote -{' '}
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

          <p style={{ color: theme.color, textAlign: 'justify' }}>
            It was such a wonderful journey with spring IT Ltd. It was an internship in full-stack
            web development for almost 4 months. Mainly I worked with Javascript (Node and React).
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
              setShowMore2(!showingMore2);
            }}
          >
            {showingMore2 ? (
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
            <p style={{ color: '#359dfd' }}> {showingMore2 ? 'Hide' : 'Show More'}</p>
          </div>
          <div style={{ display: showingMore2 ? 'inline-block' : 'none', paddingLeft: '6%' }}>
            <ul style={{ color: theme.color, paddingBottom: 10 }}>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                I and my team made a fully functional digital wallet system. For storing data we use
                MongoDB. Its back-end part is made in Node and a front-end part is made in React.
                <ul>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      gap: 5,
                      marginTop: 10,
                      marginLeft: 25,
                    }}
                  >
                    <GitHubIcon sx={{ color: theme.color }} />

                    <a
                      style={{ color: '#359dfd', textDecoration: 'none' }}
                      href='https://github.com/islamshaheb/Digital-Wallet'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Github
                    </a>
                  </div>
                </ul>
              </li>
              <li>
                {' '}
                Built some small project like{' '}
                <a
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                  href='https://github.com/islamshaheb/Digital-Wallet'
                  target='_blank'
                  rel='noreferrer'
                >
                  OTP sender
                </a>
                ,{' '}
                <a
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                  href='https://github.com/islamshaheb/The-Shawshank-Redemption-Movie-Review'
                  target='_blank'
                  rel='noreferrer'
                >
                  The Shawshank Movie Review
                </a>
                ,{' '}
                <a
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                  href='https://github.com/islamshaheb/Arithmatic-Calculator'
                  target='_blank'
                  rel='noreferrer'
                >
                  Arithmetic Calculator
                </a>
                ,{' '}
                <a
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                  href='https://github.com/islamshaheb/Star-Pattern-Using-Javascript'
                  target='_blank'
                  rel='noreferrer'
                >
                  Star Pattern
                </a>
                .
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
              Node js (Koa js)
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              React
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Material UI
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Git
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
