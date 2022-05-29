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
            gap: 15,
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
              </div>{' '}
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

      <div style={{ width: Width > 768 ? '50%' : '100%' }}>
        <p style={{ color: theme.color }} className={styles.title}>
          Things I take care of
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <div>
            <p style={{ fontSize: 17, fontWeight: 500, color: theme.color }}>Thing I test </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni, enim quisquam
              officia sit a. Reprehenderit non ex consequuntur quisquam temporibus, eaque quos
              soluta voluptatem, labore ad vero nesciunt aperiam.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 17, fontWeight: 500, color: theme.color }}>Thing I test </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni, enim quisquam
              officia sit a. Reprehenderit non ex consequuntur quisquam temporibus, eaque quos
              soluta voluptatem, labore ad vero nesciunt aperiam.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 17, fontWeight: 500, color: theme.color }}>Thing I test </p>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: theme.color,
                marginTop: 10,
                textAlign: 'justify',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni, enim quisquam
              officia sit a. Reprehenderit non ex consequuntur quisquam temporibus, eaque quos
              soluta voluptatem, labore ad vero nesciunt aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndValues;
