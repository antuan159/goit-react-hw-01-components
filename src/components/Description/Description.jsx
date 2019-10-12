import React from 'react';
import T from 'prop-types';
import style from './Description.module.css';

const Description = ({ avatar, name, tag, location }) => (
  <div className={style.description}>
    <img src={avatar} alt="user avatar" className={style.image} />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>
);

Description.propTypes = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
};

export default Description;
