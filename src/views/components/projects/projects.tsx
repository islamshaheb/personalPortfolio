/** @format */

import { useContext } from 'react';
import { ThemeContext } from 'App';
import styles from 'views/pages/homePage/homePage.module.css';
import profile from 'assets/profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';
const Projects = () => {
  const theme = useContext(ThemeContext);
  const { Width } = useWindowDimensions();

  return (
    <div style={{ display: 'flex', gap: '5%', flexWrap: 'wrap' }}>
      <div style={{ color: theme.color, width: Width > 768 ? '30%' : '100%' }}>
        <p style={{ color: theme.color, marginBottom: 5 }} className={styles.title}>
          Projects
        </p>
        <p className={styles.skillDiv} style={{ color: theme.color }}>
          Lists of my pet project I have done for myself.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 25,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: Width > 768 ? '65%' : '100%',
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
            {/* <img src={profile} height={40} width={40} alt='not supported Images' /> */}

            <div>
              <p className={styles.projectName}>Digital Wallet</p>
              <p style={{ color: theme.color, fontSize: 16 }}>2021</p>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <GitHubIcon sx={{ color: theme.color }} />

            <a
              style={{ color: theme.color, textDecoration: 'none' }}
              href='https://github.com/islamshaheb/Digital-Wallet'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>

          <a
            style={{ color: '#359dfd', fontWeight: 500, textDecoration: 'none', display: 'none' }}
            href='https://imagecolorpicker.com/'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>
          <p style={{ color: theme.color, textAlign: 'justify' }}>
            A fully functional digital wallet APIs. Consists of CRUD operation. Some functionalities
            are Signup, Sign in, and Creating session. Verifying every action using token,
            Transfer/deposit/withdraw money from the wallet. Send all transactions using the
            Sendgrid adapter in PDF format. Able to purchase products.
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
              Node Js
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
              Nginx
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
            {/* <img src={profile} height={40} width={40} alt='not supported Images' /> */}

            <div>
              <p className={styles.projectName}>Covid-19 Data visualization & Updated news</p>
              <p style={{ color: theme.color, fontSize: 16 }}>2021</p>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <GitHubIcon sx={{ color: theme.color }} />

            <a
              style={{ color: theme.color, textDecoration: 'none' }}
              href='https://github.com/islamshaheb/Covid_19/'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>

          <a
            style={{ color: '#359dfd', fontWeight: 500, textDecoration: 'none', display: 'none' }}
            href='https://imagecolorpicker.com/'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>
          <p style={{ color: theme.color, textAlign: 'justify' }}>
            A project to show Covid-19 affected people in the world. Here we have some specific
            features to show data of Covid-19 affected person in Bangladesh district wise and
            someone can post comment and one can reply and edit that thing.
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
              Python
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Django
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Bootstrap
            </div>{' '}
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              SQlite
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Web scrapping (Beautiful Soap)
            </div>
          </div>
        </div>{' '}
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
            {/* <img src={profile} height={40} width={40} alt='not supported Images' /> */}

            <div>
              <p className={styles.projectName}>Uptime monitoring API</p>
              <p style={{ color: theme.color, fontSize: 16 }}>2021</p>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <GitHubIcon sx={{ color: theme.color }} />

            <a
              style={{ color: theme.color, textDecoration: 'none' }}
              href='https://github.com/islamshaheb/Uptime-Monitoring-API-using-raw-Node'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>

          <a
            style={{ color: '#359dfd', fontWeight: 500, textDecoration: 'none', display: 'none' }}
            href='https://imagecolorpicker.com/'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>
          <p style={{ color: theme.color, textAlign: 'justify' }}>
            An API that is continuously monitoring the state. If it found any mismatch with
            expectation then it sent an alert to the user through email.
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
              Node (Express js)
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
            {/* <img src={profile} height={40} width={40} alt='not supported Images' /> */}

            <div>
              <p className={styles.projectName}>Online Banking</p>
              <p style={{ color: theme.color, fontSize: 16 }}>2019</p>
            </div>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5 }}
          >
            <GitHubIcon sx={{ color: theme.color }} />

            <a
              style={{ color: theme.color, textDecoration: 'none' }}
              href='https://github.com/islamshaheb/Online_Banking'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>

          <a
            style={{ color: '#359dfd', fontWeight: 500, textDecoration: 'none', display: 'none' }}
            href='https://imagecolorpicker.com/'
            target='_blank'
            rel='noreferrer'
          >
            Live
          </a>
          <p style={{ color: theme.color, textAlign: 'justify' }}>
            An online Banking platform for everyone who has just internet access. By this one can
            easily transfer or withdraw money from his/her current place.
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
              Python
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Django
            </div>
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              Bootstrap
            </div>{' '}
            <div
              className={styles.tags}
              style={{
                color: theme.dark ? '#540478' : '#F3F2F8',
                background: theme.dark ? '#12EFEF' : '#544A8A',
              }}
            >
              SQlite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
