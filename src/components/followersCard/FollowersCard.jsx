import {
  StyledFollowersCard,
  StyledFollowersCardArrowImg,
  StyledFollowersCardFollowersWinLose,
  StyledFollowersCardFollowersWord,
  StyledFollowersCardNumberOfFollowers,
  StyledFollowersCardNumberOfFollowersUpOrDown,
  StyledFollowersCardSocialMediaIconUser,
  StyledFollowersCardSocialMediaImg,
  StyledFollowersCardUser
} from './FollowersCard.styles';

const FollowersCard = ({
  borderColor,
  socialMediaSrc,
  socialMediaAlt,
  user,
  numberOfFollowers,
  followersWord,
  arrowSrc,
  arrowAlt,
  numberOfFollowersUpOrDown
}) => {
  const isArrowUp = arrowSrc.includes('up');

  return (
    <StyledFollowersCard $borderColor={borderColor}>
      <StyledFollowersCardSocialMediaIconUser>
        <StyledFollowersCardSocialMediaImg src={socialMediaSrc} alt={socialMediaAlt} />
        <StyledFollowersCardUser>{user}</StyledFollowersCardUser>
      </StyledFollowersCardSocialMediaIconUser>

      <StyledFollowersCardNumberOfFollowers>{numberOfFollowers}</StyledFollowersCardNumberOfFollowers>

      <StyledFollowersCardFollowersWord>{followersWord}</StyledFollowersCardFollowersWord>

      <StyledFollowersCardFollowersWinLose>
        <StyledFollowersCardArrowImg src={arrowSrc} alt={arrowAlt} />

        <StyledFollowersCardNumberOfFollowersUpOrDown $isArrowUp={isArrowUp}>
          {numberOfFollowersUpOrDown}
        </StyledFollowersCardNumberOfFollowersUpOrDown>
      </StyledFollowersCardFollowersWinLose>
    </StyledFollowersCard>
  );
};

export default FollowersCard;
