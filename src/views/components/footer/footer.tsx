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

const Footer = () => {
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
    <div style={{}}>
      <div style={{ color: theme.color, width: '30%' }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Education
        </p>
        <p style={{ color: theme.color }}>Educational background.</p>
      </div>
    </div>
  );
};

export default Footer;
