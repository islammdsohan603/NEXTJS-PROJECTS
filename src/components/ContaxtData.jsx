'use client';

import React, { createContext, useEffect, useState } from 'react';

export const FriendsContext = createContext();

const ContextData = ({ children }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  // Click Handler for Card
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

  return (
    <FriendsContext.Provider value={{ data, setData, handleCard }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default ContextData;
