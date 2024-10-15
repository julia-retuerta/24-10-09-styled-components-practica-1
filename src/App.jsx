import FollowersCardsContainer from './components/followersCardsContainer/FollowersCardsContainer';
import OverviewTodayCardsContainer from './components/overviewTodayCardContainer/OverviewTodayCardContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <FollowersCardsContainer />
      <OverviewTodayCardsContainer/>
    </>
  );
};

export default App;
