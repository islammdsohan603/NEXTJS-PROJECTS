'use client';

import { useContext } from 'react';
import { FriendsContext } from '@/components/ContaxtData';
import Image from 'next/image';
import Link from 'next/link';
import { GridLoader } from 'react-spinners';

const FrindsData = () => {
  const { data, handleCard } = useContext(FriendsContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.length === 0 ? (
          <div className="h-[70vh] flex items-center justify-center col-span-full">
            <GridLoader color="#22c55e" />
          </div>
        ) : (
          data.map(friend => (
            <Link
              key={friend.id}
              href={`/singlefriends/${friend.id}`}
              onClick={() => handleCard(friend.id)}
              className="p-4 bg-base-200 rounded-xl text-center space-y-2 cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-2xl shadow-blue-200"
            >
              <Image
                src={friend.picture}
                width={80}
                height={80}
                alt={friend.name}
                className="rounded-full mx-auto"
              />

              <h2 className="text-lg font-semibold">{friend.name}</h2>

              <span className="text-sm font-semibold text-neutral-500">
                {friend.days_since_contact}d ago
              </span>

              <div className="flex items-center gap-6 justify-center">
                {friend.tags?.map((item, index) => (
                  <span
                    key={index}
                    className="bg-green-200 px-4 py-1.5 rounded-2xl text-xs font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <span
                  className={`px-4 py-1 rounded-full ${
                    friend.status === 'overdue'
                      ? 'bg-red-500'
                      : friend.status === 'almost due'
                        ? 'bg-yellow-400'
                        : friend.status === 'on-track'
                          ? 'bg-green-800 text-white'
                          : ''
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default FrindsData;
