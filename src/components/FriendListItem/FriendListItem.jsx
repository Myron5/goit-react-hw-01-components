import PropTypes from 'prop-types';
import { FriendBox, Image, IsOnline } from './FriendListItem.styled';

import { other } from '../../constants';

export const FriendListItem = ({
  avatar = other.defaultProfImg,
  name,
  isOnline,
}) => (
  <FriendBox>
    <IsOnline isOnline={isOnline}></IsOnline>
    <Image avatar={avatar} />
    <p>{name}</p>
  </FriendBox>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
