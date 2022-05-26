/** @format */

import { useContext } from 'react';
import { ThemeContext } from 'App';
import styles from 'views/pages/homePage/homePage.module.css';
import profile from 'assets/profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
const Projects = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ display: 'flex', gap: '5%', flexWrap: 'wrap' }}>
      <p style={{ color: theme.color, width: '30%' }} className={styles.title}>
        Projects
      </p>

      <div
        style={{
          display: 'flex',
          gap: 25,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '65%',
        }}
      >
        <div
          className={theme.dark ? styles.boxDark : styles.boxLight}
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
              <p className={styles.projectName}>This is project Name</p>
              <p style={{ color: theme.color, fontSize: 16 }}>2021</p>
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
        <div
          className={theme.dark ? styles.boxDark : styles.boxLight}
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
              <p className={styles.projectName}>This is project Name</p>
              <p style={{ color: theme.color, fontSize: 16 }}>2021</p>
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
