/** @format */

import { Dispatch, SetStateAction, useState } from 'react';
import { Theme } from 'model/varable';
import LandingSection from 'views/components/landIngSection/landingSection';
import MoreAboutMe from 'views/components/moreAboutMe/moreAboutMe';
interface props {
  theme: Theme;
}
const HomePage = ({ theme }: props) => {
  return (
    <>
      <LandingSection theme={theme} />
      <MoreAboutMe theme={theme} />
    </>
  );
};
export default HomePage;
