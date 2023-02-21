import PropTypes from 'prop-types';
import {
  ProfileBox,
  ProfileUpperBox,
  Image,
  UserName,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsNum,
} from './Profile.styled';

import { other } from '../../constants';
import { numberWithCommas } from '../../utils';

export const Profile = ({
  username,
  tag,
  location,
  avatar = other.defaultProfImg,
  stats,
}) => (
  <ProfileBox>
    <ProfileUpperBox>
      <Image avatar={avatar} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </ProfileUpperBox>
    <StatsList>
      <StatsItem>
        <span>Followers</span>
        <StatsNum>{numberWithCommas(stats.followers)}</StatsNum>
      </StatsItem>
      <StatsItem>
        <span>Views</span>
        <StatsNum>{numberWithCommas(stats.views)}</StatsNum>
      </StatsItem>
      <StatsItem>
        <span>Likes</span>
        <StatsNum>{numberWithCommas(stats.likes)}</StatsNum>
      </StatsItem>
    </StatsList>
  </ProfileBox>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
