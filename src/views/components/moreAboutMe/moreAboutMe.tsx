/** @format */

import react from 'react';
import { Theme } from 'model/varable';
import styles from 'views/pages/homePage/homePage.module.css';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';
interface props {
  theme: Theme;
}
const MoreAboutMe = ({ theme }: props) => {
  const { Width } = useWindowDimensions();

  return (
    <div>
      <p
        style={{ color: theme.color, textAlign: Width > 768 ? 'left' : 'center' }}
        className={styles.title}
      >
        More about me
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: 40,
        }}
      >
        <div
          style={{
            width: Width > 768 ? 'calc(50% - 42px) ' : '100%',
            color: theme.color,
            textAlign: 'justify',
          }}
        >
          I'm a programmer and lifelong learner. I love writing software and I am grateful that I
          get to make a living doing so. I led my team to win 5 international software competitions
          during college. I find it extremity enjoyable to solve a real-world problem by writing
          software. So I still take some time out, every year, to participate in top software
          competitions around the world. Like everyone else I too have to keep up, and I believe
          this helps me a lot with that. Recently I have been writing open source software to help
          nonprofit organizations. My collaborative mapping software written for the Jane Goodall
          Institute won the DocuSign Good Code award. I feel like I'm a jack of all trades and
          master of a few. ‘Roll up your sleeves and get the job done’ - is my motto
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: Width > 768 ? 'flex-start' : 'center',
            flexWrap: 'nowrap',
            gap: 20,
            flexDirection: 'column',
            justifyContent: 'center',
            width: Width > 768 ? '50%' : '100%',
          }}
        >
          <div>
            <div
              style={{
                borderTop: '2px solid green',
                width: 60,
                margin: Width <= 786 ? '0 auto' : 'inherit',
              }}
              // className={styles.textTitle}
            ></div>
            <p style={{ color: theme.color }} className={styles.textTitle}>
              {' '}
              Things I like
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: Width > 769 ? 'flex-start' : 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Hello There
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
