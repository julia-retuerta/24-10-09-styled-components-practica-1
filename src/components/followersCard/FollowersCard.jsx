import {
  StyledFollowersCard,
  StyledFollowersCardArrowImg,
  StyledFollowersCardFollowersWord,
  StyledFollowersCardNumberOfFollowers,
  StyledFollowersCardNumberOfFollowersUpOrDown,
  StyledFollowersCardSocialMediaImg,
  StyledFollowersCardUser
} from './FollowersCard.styles';

const FollowersCard = ({
  socialMediaSrc,
  socialMediaAlt,
  user,
  numberOfFollowers,
  followersWord,
  arrowSrc,
  arrowAlt,
  numberOfFollowersUpOrDown
}) => {
  return (
    <StyledFollowersCard>
      <StyledFollowersCardSocialMediaImg src={socialMediaSrc} alt={socialMediaAlt} />

      <StyledFollowersCardUser>{user}</StyledFollowersCardUser>

      <StyledFollowersCardNumberOfFollowers>{numberOfFollowers}</StyledFollowersCardNumberOfFollowers>

      <StyledFollowersCardFollowersWord>{followersWord}</StyledFollowersCardFollowersWord>

      <StyledFollowersCardArrowImg src={arrowSrc} alt={arrowAlt} />

      <StyledFollowersCardNumberOfFollowersUpOrDown>
        {numberOfFollowersUpOrDown}
      </StyledFollowersCardNumberOfFollowersUpOrDown>
    </StyledFollowersCard>
  );
};

export default FollowersCard;
