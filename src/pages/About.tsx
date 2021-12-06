import Background from '../components/general/background';
import Socials from '../components/about/socials'
import UserIntroduction from '../components/about/introduction'

import MainInformation from '../components/about/main'

function About({ width }: { width: number }) {
  return (
    <Background
      color="black"
      display="flex"
      flexDirection={width < 850 ? "column" : "row"}
    >
      <Socials width={width} />
      <UserIntroduction width={width} />
      <MainInformation widen={width < 850} />
    </Background>
  );
}

export default About;
