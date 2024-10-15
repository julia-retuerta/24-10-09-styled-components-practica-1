import styled from 'styled-components';

const StyledOverviewTodayCard = styled.div`
  width: 326px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f3fa;
  border-radius: 5px;
  padding: 26px 31px 24px 24px;
`;

const StyledOverviewTodayCardLikesSocialMediaIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`;

const StyledOverviewTodayCardLikesWord = styled.span`
  color: #63687d;
  font-size: 14px;
  font-weight: 700;
`;

const StyledOverviewTodayCardSocialMediaImg = styled.img``;

const StyledOverviewTodayCardNumberOfLikes = styled.span`
  color: #1d1f29;
  font-size: 32px;
  font-weight: 700;
`;

const StyledOverviewTodayCardLikesWinLose = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledOverviewTodayCardArrowPercentage = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const StyledOverviewTodayCardArrowImg = styled.img``;

const StyledOverviewTodayCardPercentageUpOrDown = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ $isArrowUp }) => ($isArrowUp ? '#1EB589' : '#DC414C')};
`;

export {
  StyledOverviewTodayCard,
  StyledOverviewTodayCardLikesSocialMediaIcon,
  StyledOverviewTodayCardSocialMediaImg,
  StyledOverviewTodayCardLikesWord,
  StyledOverviewTodayCardLikesWinLose,
  StyledOverviewTodayCardNumberOfLikes,
  StyledOverviewTodayCardArrowPercentage,
  StyledOverviewTodayCardArrowImg,
  StyledOverviewTodayCardPercentageUpOrDown
};
