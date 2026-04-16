'use client';

import React, { createContext, useEffect, useState } from 'react';
import { IoCall } from 'react-icons/io5';
import { MdTextsms } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';

export const FriendsContext = createContext();

const collingArray = [
  {
    id: 1,
    collName: 'Call',
    title: 'Had a Quick Call',
    icon: <IoCall />,
    hidding: 'Meetup',
  },
  {
    id: 2,
    collName: 'Text',
    title: 'Asked for Career Advice',
    icon: <MdTextsms />,
    hidding: 'Text',
  },
  {
    id: 3,
    collName: 'Video',
    title: 'Had a Video Meeting',
    icon: <FaVideo />,
    hidding: 'Video',
  },
];

const ContextData = ({ children }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleCard = id => {
    const isExistCard = selected.find(item => item.id === id);

    if (isExistCard) {
      alert('Already Added ❌');
    } else {
      const friend = data.find(item => item.id === id);
      setSelected([...selected, friend]);
      alert('Added Successfully ✅');
    }
  };

  const handleHistoryFunction = callId => {
    const selectedCall = collingArray.find(item => item.id === callId);

    const newHistory = {
      id: Date.now(),
      type: selectedCall.collName,
      title: selectedCall.title,
      icon: selectedCall.icon,
      time: new Date().toLocaleString(),
    };

    setHistory(prev => [newHistory, ...prev]);
  };
  return (
    <FriendsContext.Provider
      value={{ data, handleCard, handleHistoryFunction, history }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default ContextData;
