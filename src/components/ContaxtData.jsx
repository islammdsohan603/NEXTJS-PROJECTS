'use client';

import React, { createContext, useEffect, useState } from 'react';

export const FriendsContext = createContext();

const ContextData = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <FriendsContext.Provider value={{ data, setData }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default ContextData;
