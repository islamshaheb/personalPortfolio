/** @format */

import { useContext } from 'react';
import { ThemeContext } from 'App';
import styles from 'views/pages/homePage/homePage.module.css';
import profile from 'assets/profile.jpg';
const Projects = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <p style={{ color: theme.color }} className={styles.title}>
          Projects
        </p>
      </div>
      <div style={{ display: 'flex', gap: 15 }}>
        <div
          className={theme.dark ? styles.boxDark : styles.boxLight}
          style={{
            background: theme.dark ? '#1f2937' : '#f7f7f7',
            display: 'flex',
            gap: 15,
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div>
              <img src={profile} height={40} width={40} alt='not supported Imge' />
            </div>
            <div>
              <p className={styles.projectName}>This is prject Name</p>
              <p className={styles.projectName}>2021</p>
            </div>
          </div>
          <p style={{ color: theme.color }}>Github</p>
          <p style={{ color: theme.color }}>Live</p>
          <p style={{ color: theme.color }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero possimus commodi
            totam debitis nostrum est sapiente nobis ut illo vel repellat eveniet, adipisci autem
            fuga delectus, blanditiis praesentium amet.
          </p>
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

export default Projects;
