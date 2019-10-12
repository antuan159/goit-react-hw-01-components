import React from 'react';
import T from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends, alt, width }) => (
  <ul className={style.list}>
    {friends.map(item => (
      <li className={style.list__item} key={item.id}>
        <span
          className={
            item.isOnline ? style.status__offline : style.status__online
          }
        />
        <img
          className={style.avatar}
          src={item.avatar}
          alt={alt}
          width={width}
        />
        <p className={style.name}>{item.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  alt: 'User Photo',
  width: 48,
};

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
  alt: T.string,
  width: T.number,
};

export default FriendList;
