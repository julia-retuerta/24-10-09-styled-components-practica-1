import { OVERVIEWTODAYCARDS } from '../../constants/overviewTodayCards';
import OverviewTodayCard from '../overviewTodayCard/OverviewTodayCard';
import { StyledOverviewTodayCardsContainer } from './overviewTodayCardContainer.styles';

const OverviewTodayCardsContainer = () => {
  return (
    <StyledOverviewTodayCardsContainer>
      {OVERVIEWTODAYCARDS.map(overviewTodayCard => (
        <OverviewTodayCard
          key={overviewTodayCard.id}
          likesWord={overviewTodayCard.likesWord}
          socialMediaSrc={overviewTodayCard.socialMediaSrc}
          socialMediaAlt={overviewTodayCard.socialMediaAlt}
          numberOfLikes={overviewTodayCard.numberOfLikes}
          arrowSrc={overviewTodayCard.arrowSrc}
          arrowAlt={overviewTodayCard.arrowAlt}
          percentageUpOrDown={overviewTodayCard.percentageUpOrDown}
        />
      ))}
    </StyledOverviewTodayCardsContainer>
  );
};

export default OverviewTodayCardsContainer;
