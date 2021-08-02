import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <li
      className={s.item}
      style={{ backgroundColor: isOnline ? '#69bd69' : '#d34040' }}
    >
      {isOnline ? (
        <span className={s.status}>Online</span>
      ) : (
        <span className={s.status}>Ofline</span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
