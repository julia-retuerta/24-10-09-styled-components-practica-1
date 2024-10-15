import OverviewTodayCardsContainer from '../overviewTodayCardContainer/OverviewTodayCardContainer';
import { StyledOverviewTodayContainer, StyledOverviewTodayContainerTitle } from './overviewTodayContainer.styles';

const OverviewTodayContainer = ({ title }) => {
  return (
    <StyledOverviewTodayContainer>
      <StyledOverviewTodayContainerTitle>{title}</StyledOverviewTodayContainerTitle>
      <OverviewTodayCardsContainer />
    </StyledOverviewTodayContainer>
  );
};

export default OverviewTodayContainer;
