import React from 'react';
import T from 'prop-types';
import style from './Profiler.module.css';
import Description from '../Description';
import Stats from '../StatsProfiler';

const Profiler = ({ user }) => (
  <div className={style.profiler}>
    <Description
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
    />
    <Stats
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  </div>
);

Profiler.propTypes = {
  user: T.instanceOf(Object).isRequired,
};

export default Profiler;
