import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <Friend
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
