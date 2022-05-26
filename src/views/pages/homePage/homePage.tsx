/** @format */

import { Dispatch, SetStateAction, useState } from 'react';
import { Theme } from 'model/varable';
import LandingSection from 'views/components/landIngSection/landingSection';
import MoreAboutMe from 'views/components/moreAboutMe/moreAboutMe';
import SkillsAndValues from 'views/components/skillsAndValues/skillsAndValues';
import Projects from 'views/components/projects/projects';
import WorkExperience from 'views/components/workExperience/workExperience';
interface props {
  theme: Theme;
}
const HomePage = ({ theme }: props) => {
  return (
    <>
      <LandingSection theme={theme} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60, marginBottom: 50 }}>
        <MoreAboutMe theme={theme} />
        <SkillsAndValues />
        <Projects />
        <WorkExperience />
      </div>
    </>
  );
};
export default HomePage;
