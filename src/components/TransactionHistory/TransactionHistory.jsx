import React from 'react';
import T from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={style.transaction}>
    <thead className={style.firstRow}>
      <tr>
        <th className={style.columnTitle}>type</th>
        <th className={style.columnTitle}>amount</th>
        <th className={style.columnTitle}>currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={style.row}>
          <td className={style.column}>{item.type}</td>
          <td className={style.column}>{item.amount}</td>
          <td className={style.column}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
