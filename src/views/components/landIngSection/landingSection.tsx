/** @format */

import { useState } from 'react';
import { Theme } from 'model/varable';
import proPic from 'assets/plus_109.png';
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions';
interface props {
  theme: Theme;
}
const LandingSection = ({ theme }: props) => {
  const { Width } = useWindowDimensions();
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: Width >= 769 ? 'nowrap' : 'wrap',
          gap: 40,
        }}
      >
        <div
          style={{
            textAlign: Width >= 769 ? 'inherit' : 'center',
            width: '100%',
          }}
        >
          <img width={Width >= 400 ? 400 : '100%'} src={proPic} alt='failed to load' />
        </div>

        <div
          style={{
            textAlign: Width >= 400 ? 'left' : 'center',
            // width: Width >= 768 ? '60%' : '100%',
          }}
        >
          <div
            style={{
              fontWeight: 600,
              color: theme.color,
              fontSize: Width > 768 ? 40 : Width > 550 ? 32 : 28,
              textAlign: Width >= 769 ? 'inherit' : 'center',
            }}
          >
            Hello I'm Mojahid
          </div>
          <div
            style={{
              fontSize: Width > 768 ? 24 : Width > 550 ? 22 : 18,
              color: theme.dark ? '#ffffff70' : '#828282',
              textAlign: Width >= 769 ? 'inherit' : 'center',
            }}
          >
            A full-stack web developer. I do my part in making the world a better place by making
            the web open, fun and more useful. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias, impedit explicabo neque sequi temporibus corporis voluptates dolorem
            dignissimos iste voluptatum a quidem debitis sapiente reiciendis aliquam fugiat maiores
            consequatur sed?
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
