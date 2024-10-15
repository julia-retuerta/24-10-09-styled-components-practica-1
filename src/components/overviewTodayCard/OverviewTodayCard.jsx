import {
  StyledOverviewTodayCard,
  StyledOverviewTodayCardArrowImg,
  StyledOverviewTodayCardArrowPercentage,
  StyledOverviewTodayCardLikesSocialMediaIcon,
  StyledOverviewTodayCardLikesWinLose,
  StyledOverviewTodayCardLikesWord,
  StyledOverviewTodayCardNumberOfLikes,
  StyledOverviewTodayCardPercentageUpOrDown,
  StyledOverviewTodayCardSocialMediaImg
} from './overviewTodayCard.styles';

const OverviewTodayCard = ({
  likesWord,
  socialMediaSrc,
  socialMediaAlt,
  numberOfLikes,
  arrowSrc,
  arrowAlt,
  percentageUpOrDown
}) => {
  const isArrowUp = arrowSrc.includes('up');

  return (
    <StyledOverviewTodayCard>
      <StyledOverviewTodayCardLikesSocialMediaIcon>
        <StyledOverviewTodayCardLikesWord>{likesWord}</StyledOverviewTodayCardLikesWord>
        <StyledOverviewTodayCardSocialMediaImg src={socialMediaSrc} alt={socialMediaAlt} />
      </StyledOverviewTodayCardLikesSocialMediaIcon>

      <StyledOverviewTodayCardLikesWinLose>
        <StyledOverviewTodayCardNumberOfLikes>{numberOfLikes}</StyledOverviewTodayCardNumberOfLikes>

        <StyledOverviewTodayCardArrowPercentage>
          <StyledOverviewTodayCardArrowImg src={arrowSrc} alt={arrowAlt} />
          <StyledOverviewTodayCardPercentageUpOrDown $isArrowUp={isArrowUp}>
            {percentageUpOrDown}
          </StyledOverviewTodayCardPercentageUpOrDown>
        </StyledOverviewTodayCardArrowPercentage>
      </StyledOverviewTodayCardLikesWinLose>
    </StyledOverviewTodayCard>
  );
};

export default OverviewTodayCard;
