/** @format */

import react from 'react';
import { Theme } from 'model/varable';
interface props {
  theme: Theme;
}
const MoreAboutMe = ({ theme }: props) => {
  return (
    <div>
      <p style={{ color: theme.color, fontSize: 26, fontWeight: 600, marginBottom: 30 }}>
        More about me
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: 40,
        }}
      >
        <div style={{ width: '50%', color: theme.color }}>
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
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: 20,
            flexDirection: 'column',
          }}
        >
          <div>
            <div style={{ borderTop: '2px solid green', width: 60 }}></div>
            <p style={{ margin: '4 0', fontSize: 18 }}> Things I like</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
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
            </div>
          </div>
          <div>
            <div style={{ borderTop: '2px solid green', width: 60 }}></div>
            <p style={{ margin: '4 0', fontSize: 18 }}> Things I like</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
                gap: 10,
              }}
            >
              <div
                style={{
                  background: '#597F51',
                  padding: '2px 10px',
                  borderRadius: 3,
                  color: '#171F25',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '2px 10px',
                  borderRadius: 3,
                  color: '#171F25',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '2px 10px',
                  borderRadius: 3,
                  color: '#171F25',
                }}
              >
                Hello There
              </div>
            </div>
          </div>
          <div>
            <div style={{ borderTop: '2px solid green', width: 60 }}></div>
            <p style={{ margin: '8 0', fontSize: 18, padding: '2px 0' }}> Things I like</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
                gap: 10,
              }}
            >
              <div
                style={{
                  background: '#597F51',
                  padding: '2px 10px',
                  borderRadius: 3,
                  color: '#171F25',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '2px 10px',
                  borderRadius: 3,
                  color: '#171F25',
                }}
              >
                Hello There
              </div>
              <div
                style={{
                  background: '#597F51',
                  padding: '2px 10px',
                  borderRadius: 3,
                  color: '#171F25',
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
