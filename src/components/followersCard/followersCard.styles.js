import styled from 'styled-components';

const StyledFollowersCard = styled.div`
  position: relative;
  width: 326px;
  height: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f3fa;
  border-radius: 5px;
  padding-block: 32px 24px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ $borderColor }) => $borderColor};
    border-radius: 5px 5px 0 0;
  }
`;

const StyledFollowersCardSocialMediaIconUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`;

const StyledFollowersCardSocialMediaImg = styled.img``;

const StyledFollowersCardUser = styled.span`
  color: #63687d;
  font-size: 12px;
  font-weight: 700;
`;

const StyledFollowersCardNumberOfFollowers = styled.span`
  color: #1d1f29;
  font-size: 56px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -2px;
  margin-bottom: 9px;
`;

const StyledFollowersCardFollowersWord = styled.span`
  color: #63687d;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

const StyledFollowersCardFollowersWinLose = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledFollowersCardArrowImg = styled.img``;

const StyledFollowersCardNumberOfFollowersUpOrDown = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ $isArrowUp }) => ($isArrowUp ? '#1EB589' : '#DC414C')};
`;

export {
  StyledFollowersCard,
  StyledFollowersCardSocialMediaIconUser,
  StyledFollowersCardSocialMediaImg,
  StyledFollowersCardUser,
  StyledFollowersCardNumberOfFollowers,
  StyledFollowersCardFollowersWord,
  StyledFollowersCardFollowersWinLose,
  StyledFollowersCardArrowImg,
  StyledFollowersCardNumberOfFollowersUpOrDown
};
