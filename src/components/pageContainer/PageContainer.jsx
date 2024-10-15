import FollowersCardsContainer from '../followersCardsContainer/FollowersCardsContainer';
import OverviewTodayContainer from '../overviewTodayContainer/OverviewTodayContainer';
import { StyledPageContainer, StyledPageContainerSubtitle, StyledPageContainerTitle } from './pageContainer.styles';

const PageContainer = ({ title, subtitle }) => {
  return (
    <StyledPageContainer>
      <StyledPageContainerTitle>{title}</StyledPageContainerTitle>
      <StyledPageContainerSubtitle>{subtitle}</StyledPageContainerSubtitle>

      <FollowersCardsContainer />
      <OverviewTodayContainer title='Overview - Today' />
    </StyledPageContainer>
  );
};

export default PageContainer;
