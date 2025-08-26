/** @format */

import { Theme } from 'model/varable';
import LandingSection from 'views/components/landIngSection/landingSection';
import MoreAboutMe from 'views/components/moreAboutMe/moreAboutMe';
import SkillsAndValues from 'views/components/skillsAndValues/skillsAndValues';
import Projects from 'views/components/projects/projects';
import WorkExperience from 'views/components/workExperience/workExperience';
import Education from 'views/components/education/education';
import Contests from 'views/components/contests/contests';
import Footer from 'views/components/footer/footer';
interface props {
  theme: Theme;
}
const HomePage = ({ theme }: props) => {
  return (
    <>
      <LandingSection theme={theme} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60, paddingBottom: 50 }}>
        <MoreAboutMe theme={theme} />
        <SkillsAndValues />
        <WorkExperience />
        <Projects />
        <Education />
        <Contests />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
