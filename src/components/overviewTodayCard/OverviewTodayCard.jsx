import {
  StyledOverviewTodayCard,
  StyledOverviewTodayCardArrowImg,
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

      <StyledOverviewTodayCardNumberOfLikes>{numberOfLikes}</StyledOverviewTodayCardNumberOfLikes>

      <StyledOverviewTodayCardLikesWinLose>
        <StyledOverviewTodayCardArrowImg src={arrowSrc} alt={arrowAlt} />

        <StyledOverviewTodayCardPercentageUpOrDown $isArrowUp={isArrowUp}>
          {percentageUpOrDown}
        </StyledOverviewTodayCardPercentageUpOrDown>
      </StyledOverviewTodayCardLikesWinLose>
    </StyledOverviewTodayCard>
  );
};

export default OverviewTodayCard;
