/** @format */

import { useState } from 'react';
import { Theme } from 'model/varable';
import proPic from 'assets/plus_109.png';
interface props {
  theme: Theme;
}
const LandingSection = ({ theme }: props) => {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: 40,
        }}
      >
        <div>
          <img width='400px' src={proPic} alt='failed to load' />
        </div>
        <div>
          <div style={{ fontWeight: 600, color: theme.color, fontSize: 40 }}>Hello I'm Mojahid</div>
          <div style={{ fontSize: 26, color: theme.dark ? '#ffffff70' : '#828282' }}>
            A full-stack web developer. I do my part in making the world a better place by making
            the web open, fun and more useful.
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
