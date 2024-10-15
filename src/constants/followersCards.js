import { v4 } from 'uuid';

const FOLLOWERSCARDS = [
  {
    id: v4(),
    borderColor: '#178FF5',
    socialMediaSrc: 'assets/images/icon-facebook.svg',
    socialMediaAlt: 'Facebook icon',
    user: '@nathanf',
    numberOfFollowers: '1987',
    followersWord: 'Followers',
    arrowSrc: 'assets/images/icon-up.svg',
    arrowAlt: 'Arrow up',
    numberOfFollowersUpOrDown: '12 Today'
  },
  {
    id: v4(),
    borderColor: '#1DA1F2',
    socialMediaSrc: 'assets/images/icon-twitter.svg',
    socialMediaAlt: 'Twitter icon',
    user: '@nathanf',
    numberOfFollowers: '1044',
    followersWord: 'Followers',
    arrowSrc: 'assets/images/icon-up.svg',
    arrowAlt: 'Arrow up',
    numberOfFollowersUpOrDown: '99 Today'
  },
  {
    id: v4(),
    borderColor: 'linear-gradient(to right, #FDC366, #EE877E, #DF4896)',
    socialMediaSrc: 'assets/images/icon-instagram.svg',
    socialMediaAlt: 'Instagram icon',
    user: '@realnathanf',
    numberOfFollowers: '11k',
    followersWord: 'Followers',
    arrowSrc: 'assets/images/icon-up.svg',
    arrowAlt: 'Arrow up',
    numberOfFollowersUpOrDown: '1099 Today'
  },
  {
    id: v4(),
    borderColor: '#C4032B',
    socialMediaSrc: 'assets/images/icon-youtube.svg',
    socialMediaAlt: 'Youtube icon',
    user: 'Nathan F.',
    numberOfFollowers: '8239',
    followersWord: 'Suscribers',
    arrowSrc: 'assets/images/icon-down.svg',
    arrowAlt: 'Arrow down',
    numberOfFollowersUpOrDown: '144 Today'
  }
];

export { FOLLOWERSCARDS };
