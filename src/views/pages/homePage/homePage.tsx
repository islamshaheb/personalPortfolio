/** @format */

import { Dispatch, SetStateAction, useState } from 'react';
import { Theme } from 'model/varable';
import LandingSection from 'views/components/landIngSection/landingSection';
import MoreAboutMe from 'views/components/moreAboutMe/moreAboutMe';
import SkillsAndValues from 'views/components/skillsAndValues/skillsAndValues';
interface props {
  theme: Theme;
}
const HomePage = ({ theme }: props) => {
  return (
    <>
      <LandingSection theme={theme} />
      <MoreAboutMe theme={theme} />
      <SkillsAndValues />
    </>
  );
};
export default HomePage;
