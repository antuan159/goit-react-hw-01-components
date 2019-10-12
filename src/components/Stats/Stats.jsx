import React from 'react';
import T from 'prop-types';
import style from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={style.stats}>
    {title && <h1 className={style.title}>{title}</h1>}
    <ul className={style.list}>
      {stats.map(item => (
        <li className={style.list__item} key={item.id}>
          <span className={style.label}>{item.label}</span>
          <span className={style.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: 'Title',
};

Stats.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
