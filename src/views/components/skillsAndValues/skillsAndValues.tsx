/** @format */

import { useContext } from 'react';
import { ThemeContext } from 'App';
import styles from 'views/pages/homePage/homePage.module.css';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';
const SkillsAndValues = () => {
  const { Width } = useWindowDimensions();
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 50,
      }}
    >
      <div style={{ width: Width > 768 ? 'calc(50% - 50px) ' : '100%' }}>
        <p style={{ color: theme.color }} className={styles.title}>
          Skills
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <div>
            <p className={styles.textTitle} style={{ color: theme.color }}>
              Language
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
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
                C++
              </div>
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                Python
              </div>{' '}
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                C
              </div>
            </div>
          </div>
          <div>
            <p className={styles.textTitle} style={{ color: theme.color }}>
              Web
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
              }}
            >
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                Express JS
              </div>
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                Koa Js
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
                Redux
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
                SCSS
              </div>
            </div>
          </div>
          <div>
            <p className={styles.textTitle} style={{ color: theme.color }}>
              App
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
              }}
            >
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                React Native
              </div>
            </div>
          </div>
          <div>
            <p className={styles.textTitle} style={{ color: theme.color }}>
              Database
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
              }}
            >
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
                MySQL
              </div>
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
          <div>
            <p className={styles.textTitle} style={{ color: theme.color }}>
              Test
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
              }}
            >
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                Jest
              </div>
            </div>
          </div>
          <div>
            <p className={styles.textTitle} style={{ color: theme.color }}>
              DevOps(Learning)
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
              }}
            >
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                AWS(EC2, Lamda, S3 bucket, Load balancing)
              </div>
              <div
                className={styles.tags}
                style={{
                  color: theme.dark ? '#540478' : '#F3F2F8',
                  background: theme.dark ? '#12EFEF' : '#544A8A',
                }}
              >
                Jenkins
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
                Docker
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: Width > 768 ? '50%' : '100%' }}>
        <p style={{ color: theme.color }} className={styles.title}>
          Things I take care of
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <div>
            <p
              style={{ fontSize: 17, fontWeight: 500, color: theme.dark ? '#EDF5F3' : theme.color }}
            >
              Passion about tech{' '}
            </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              I always try to invest my on such thing which add some value. Without watching random
              video on internet I prefer to watch tech related videos and read blogs.
            </p>
          </div>
          <div>
            <p
              style={{ fontSize: 17, fontWeight: 500, color: theme.dark ? '#EDF5F3' : theme.color }}
            >
              Think before Implement
            </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              I always focus on thinking/research before going to code. I think it is more important
              than writing code. Something, It happend that, without understanding the context we
              start our code. After a while we understand that, that was not right way. Than what
              heppend? We delete full code and start from zero. This is total waste of time, energy.
              So, always focus on that.
            </p>
          </div>
          <div>
            <p
              style={{ fontSize: 17, fontWeight: 500, color: theme.dark ? '#EDF5F3' : theme.color }}
            >
              Finish on time
            </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              I always try to finish my task on time. It's a very good practice to finish project in
              time.
            </p>
          </div>
          <div>
            <p
              style={{ fontSize: 17, fontWeight: 500, color: theme.dark ? '#EDF5F3' : theme.color }}
            >
              Show humbleness
            </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              I believe it is not possible for a men to know everything. There is no shame on it. If
              I don't know anything, simply I confess it and I asked for time to learn. I believe
              everything possible to implement. Just may be it will take some more times.
            </p>
          </div>
          <div>
            <p
              style={{ fontSize: 17, fontWeight: 500, color: theme.dark ? '#EDF5F3' : theme.color }}
            >
              Help others
            </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              I always try to help person around me. I try to help my team mate in professional and
              other ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndValues;
