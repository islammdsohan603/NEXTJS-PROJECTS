'use client';

import React, { useContext } from 'react';
import { useParams } from 'next/navigation';
import { FriendsContext } from '@/components/ContaxtData';

import Image from 'next/image';

// icons
import { MdOutlineSnooze } from 'react-icons/md';
import { FaBoxArchive } from 'react-icons/fa6';
import { RiDeleteBinLine } from 'react-icons/ri';

import History from '@/components/History';

const buttonsArray = [
  { title: 'Snooze 2 Weeks', icons: <MdOutlineSnooze /> },
  { title: 'Archive', icons: <FaBoxArchive /> },
  { title: 'Delete', icons: <RiDeleteBinLine /> },
];

const SingleFriend = () => {
  const { id } = useParams();
  const { data } = useContext(FriendsContext);

  const friend = data.find(item => item.id === parseInt(id));

  if (!friend) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-base-100 to-base-200 py-10 min-h-[90vh]">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* LEFT PROFILE CARD */}
          <div className="bg-base-200/60 backdrop-blur-lg border border-base-300 p-6 rounded-3xl col-span-1 space-y-4 flex flex-col items-center justify-start shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Image
              src={friend.picture}
              alt="Image"
              width={120}
              height={120}
              className="rounded-full ring-4 ring-primary/30 hover:scale-105 transition duration-300"
            />

            <h1 className="text-xl font-bold text-neutral-800 tracking-wide">
              {friend.name}
            </h1>

            <div className="flex flex-wrap gap-2 justify-center">
              {friend.tags.map((item, index) => (
                <span
                  key={index}
                  className="bg-linear-to-r from-green-200 to-green-300 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <span
              className={`px-4 py-1 rounded-full text-xs font-semibold shadow-md
                ${
                  friend.status === 'overdue'
                    ? 'bg-red-500 text-white'
                    : friend.status === 'almost due'
                      ? 'bg-yellow-400 text-black'
                      : friend.status === 'on-track'
                        ? 'bg-green-600 text-white'
                        : ''
                }`}
            >
              {friend.status}
            </span>

            <p className="text-center text-sm text-neutral-500 leading-relaxed">
              {friend.bio}
            </p>

            <div className="flex w-full flex-col gap-3">
              {buttonsArray.map((btn, index) => (
                <button
                  key={index}
                  className={`w-full btn rounded-xl shadow-md hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200
                  ${
                    btn.title === 'Delete'
                      ? 'text-red-500 hover:bg-red-100'
                      : 'hover:bg-base-100'
                  }`}
                >
                  {btn.icons}
                  {btn.title}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-3 space-y-6">
            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  value: friend.days_since_contact,
                  label: 'Days Since Contact',
                },
                {
                  value: friend.goal,
                  label: 'Goal (Days)',
                },
                {
                  value: new Date(friend.next_due_date).toLocaleDateString(
                    'en-US',
                    {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    },
                  ),
                  label: 'Next Due',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-base-200/70 backdrop-blur-md border border-base-300 p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h1 className="text-3xl font-bold text-primary">
                    {item.value}
                  </h1>
                  <span className="text-sm font-medium text-neutral-500 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* RELATIONSHIP GOAL */}
            <div className="bg-base-200/70 backdrop-blur-md border border-base-300 p-6 rounded-3xl shadow-lg flex items-center justify-between hover:shadow-xl transition">
              <div>
                <h1 className="text-lg font-semibold">Relationship Goal</h1>
                <span className="text-neutral-500 font-medium">
                  Connect every {friend.goal} days
                </span>
              </div>

              <button className="btn btn-primary rounded-xl px-6 hover:scale-105 transition">
                Edit
              </button>
            </div>

            {/* CALL / TEXT / VIDEO */}

            <div className="col-span-3">
              <History />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFriend;
