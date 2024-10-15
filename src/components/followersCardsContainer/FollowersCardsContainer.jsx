import { FOLLOWERSCARDS } from '../../constants/followersCards';
import FollowersCard from '../followersCard/FollowersCard';
import { StyledFollowersCardsContainer } from './followersCardsContainer.styles';

const FollowersCardsContainer = () => {
  return (
    <StyledFollowersCardsContainer>
      {FOLLOWERSCARDS.map(followersCard => (
        <FollowersCard
          key={followersCard.id}
          borderColor={followersCard.borderColor}
          socialMediaSrc={followersCard.socialMediaSrc}
          socialMediaAlt={followersCard.socialMediaAlt}
          user={followersCard.user}
          numberOfFollowers={followersCard.numberOfFollowers}
          followersWord={followersCard.followersWord}
          arrowSrc={followersCard.arrowSrc}
          arrowAlt={followersCard.arrowAlt}
          numberOfFollowersUpOrDown={followersCard.numberOfFollowersUpOrDown}
        />
      ))}
    </StyledFollowersCardsContainer>
  );
};

export default FollowersCardsContainer;
