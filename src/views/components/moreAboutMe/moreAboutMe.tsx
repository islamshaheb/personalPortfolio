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
          I am a self-motivated quick learner. I have good analytical and problem-solving skills. I
          have the ability to work with a team and also have enough experience to work
          independently. <br /> <br />I started my career as a backend based full-stack developer.
          For last couple of month I'm working on front-end. It makes me a perfect full-stack
          developer. I'm also working on cross-platform app development.
          <br /> <br /> Recently I've found my keen interest on devops. I'm learning Jenkins, AWS,
          Docker and Nginx. Deployed multiple site on EC2 .
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
                Movie
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Cricket
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Football
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Gardening
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: '#F5F6F6',
                }}
              >
                Running
              </div>
            </div>
          </div>
          {/* new */}
          <div>
            <div
              style={{
                borderTop: '2px solid #7A3422',
                width: 60,
                margin: Width <= 786 ? '0 auto' : 'inherit',
              }}
            ></div>
            <p style={{ color: theme.color }} className={styles.textTitle}>
              My interest
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
                  background: '#7A3422',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'white',
                }}
              >
                Development
              </div>
              <div
                style={{
                  background: '#7A3422',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'white',
                }}
              >
                Devops
              </div>
              <div
                style={{
                  background: '#7A3422',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'white',
                }}
              >
                Machine Learning
              </div>
            </div>
          </div>
          {/* ;; */}
          <div>
            <div
              style={{
                borderTop: '2px solid #80F1C0',
                width: 60,
                margin: Width <= 786 ? '0 auto' : 'inherit',
              }}
            ></div>
            <p style={{ color: theme.color }} className={styles.textTitle}>
              I'll love to work with
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
                  background: '#80F1C0',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'black',
                }}
              >
                Web development
              </div>
              <div
                style={{
                  background: '#80F1C0',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'black',
                }}
              >
                Devops
              </div>
              <div
                style={{
                  background: '#80F1C0',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'black',
                }}
              >
                App development
              </div>

              <div
                style={{
                  background: '#80F1C0',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'black',
                }}
              >
                Full-stack development
              </div>
              <div
                style={{
                  background: '#80F1C0',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'black',
                }}
              >
                Heavy backend involved project
              </div>
              <div
                style={{
                  background: '#80F1C0',
                  padding: '4px 10px',
                  borderRadius: 3,
                  color: 'black',
                }}
              >
                Scratch project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
