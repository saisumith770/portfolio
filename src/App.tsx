import Background from './components/general/background';
import Socials from './components/about/socials'
import UserIntroduction from './components/about/introduction'

import { useWindowSize } from './hooks/useWindowSize';

import MainInformation from './components/about/main'

function App() {
  const { width } = useWindowSize()
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

/**
 * Developer Since
 * Languages
 * Frameworks
 * Github Contributions
 * Github Repositories
 */

export default App;
