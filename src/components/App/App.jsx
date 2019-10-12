import React from 'react';
import style from './App.module.css';
import userDB from '../../user.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profiler from '../Profiler';
import Stats from '../Stats';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];
const App = () => (
  <div className={style.app}>
    <Profiler user={userDB} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
