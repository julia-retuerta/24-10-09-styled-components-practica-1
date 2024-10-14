import styled from 'styled-components';

const StyledFollowersCard = styled.div`
  width: 326px;
  height: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f3fa;
  border-radius: 5px;
  padding-block: 32px 24px;
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
`;

const StyledFollowersCardFollowersWord = styled.span`
  color: #63687d;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const StyledFollowersCardArrowImg = styled.img``;

const StyledFollowersCardNumberOfFollowersUpOrDown = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

export {
  StyledFollowersCard,
  StyledFollowersCardSocialMediaImg,
  StyledFollowersCardUser,
  StyledFollowersCardNumberOfFollowers,
  StyledFollowersCardFollowersWord,
  StyledFollowersCardArrowImg,
  StyledFollowersCardNumberOfFollowersUpOrDown
};
