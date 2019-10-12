import React from 'react';
import T from 'prop-types';
import style from './StatsProfile.module.css';

const StatsProfile = ({ followers, views, likes }) => (
  <ul className={style.list}>
    <li className={style.list__item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{followers}</span>
    </li>
    <li className={style.list__item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{views}</span>
    </li>
    <li className={style.list__item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{likes}</span>
    </li>
  </ul>
);

StatsProfile.propTypes = {
  followers: T.number.isRequired,
  views: T.number.isRequired,
  likes: T.number.isRequired,
};

export default StatsProfile;
