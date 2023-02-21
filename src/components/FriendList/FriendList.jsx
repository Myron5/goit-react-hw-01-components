import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <FriendListBox>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </FriendListBox>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
