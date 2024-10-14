import { FOLLOWERSCARDS } from '../../constants/followersCards';
import FollowersCard from '../followersCard/FollowersCard';
import { StyledFollowersCard } from '../followersCard/FollowersCard.styles';

const FollowersCardContainer = () => {
  return (
    <StyledFollowersCard>
      {FOLLOWERSCARDS.map(followersCard => (
        <FollowersCard
          key={followersCard.id}
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
    </StyledFollowersCard>
  );
};

export default FollowersCardContainer;
