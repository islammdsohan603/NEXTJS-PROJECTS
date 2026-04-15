'use client';

import { useContext } from 'react';
import { FriendsContext } from '@/components/ContaxtData';
import Image from 'next/image';

const FrindsData = () => {
  const { data } = useContext(FriendsContext);

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map(friend => (
        <div key={friend.id} className="p-4 shadow rounded-xl text-center">
          <Image
            src={friend.picture}
            width={80}
            height={80}
            alt={friend.name}
            className="rounded-full mx-auto"
          />

          <h2>{friend.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default FrindsData;
