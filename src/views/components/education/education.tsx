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

const Education = () => {
  const [showingMore, setShowMore] = useState<boolean>(false);
  const { Width } = useWindowDimensions();

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
      <div style={{ color: theme.color, width: Width > 768 ? '30%' : '100%' }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Education
        </p>
        <p className={styles.skillDiv} style={{ color: theme.color }}>
          Educational background.
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
                BSc in computer science and engineering.
              </p>
              <div style={{ color: theme.color, fontSize: 16 }}>
                <a
                  href='http://www.uap-bd.edu/cse/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                >
                  {' '}
                  University of Asia Pacific{' '}
                </a>
                <p>
                  Dhaka,Bangladesh.<i>2017 - 2021</i>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <p style={{ color: theme.dark ? '#B69473' : '#443A30', fontWeight: 700 }}>CGPA </p>
            <p style={{ color: theme.color }}>3.68/4</p>
          </div>
          <div style={{ paddingLeft: '6%' }}>
            <ul style={{ color: theme.color, paddingBottom: 10 }}>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                Participated in ICPC preliminary regional, IDPC several times.
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                {' '}
                Received University Scholarship for academic excellence in 2018-21
              </li>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                Class Representative(CR)
              </li>
            </ul>
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
                Higher school certificate <i style={{ fontSize: 14 }}>(A level)</i>
              </p>
              <div style={{ color: theme.color, fontSize: 16 }}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.abdurroufcollege.ac.bd/'
                  style={{ color: '#359dfd', textDecoration: 'none' }}
                >
                  Birshreshtha Munshi Abdur Rouf Public College
                </a>
                <p>
                  Pilkhana ,Dhaka,Bangladesh.<i>2013 - 2015</i>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <p style={{ color: theme.dark ? '#B69473' : '#443A30', fontWeight: 700 }}>GRADE </p>
            <p style={{ color: theme.color }}>4.83/5</p>
          </div>
          <div style={{ paddingLeft: '6%' }}>
            <ul style={{ color: theme.color, paddingBottom: 10 }}>
              <li style={{ color: theme.color, paddingBottom: 10, textAlign: 'justify' }}>
                Class captain
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
