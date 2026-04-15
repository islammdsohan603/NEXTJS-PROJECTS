import React, { useContext } from 'react';
import { IoCall } from 'react-icons/io5';
import { MdTextsms } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';

import { FriendsContext } from './ContaxtData';

const collingArray = [
  { id: 1, collName: 'Call', lavle: <IoCall /> },
  {
    id: 2,
    collName: 'Text',
    lavle: <MdTextsms />,
  },
  {
    id: 3,
    collName: 'Video',
    lavle: <FaVideo />,
  },
];

const History = () => {
  const { data, handleHistoryFunction, history } = useContext(FriendsContext);

  return (
    <div className="space-y-3">
      <div className="bg-base-200/70 backdrop-blur-md border border-base-300 p-6 rounded-3xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collingArray.map((coll, index) => (
            <div
              onClick={() => handleHistoryFunction(coll.id)}
              key={index}
              className="bg-base-100 p-8 rounded-3xl cursor-pointer flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <h1 className="text-3xl text-primary mb-2">{coll.lavle}</h1>
              <h1 className="font-semibold text-neutral-600">
                {coll.collName}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-base-200/70 backdrop-blur-md p-6 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            Recent Interactions
          </h1>
          <button className="btn"> Full History </button>
        </div>

        <div className="mt-6 space-y-3">
          {history.length === 0 ? (
            <p className="text-neutral-500 text-center">No history yet</p>
          ) : (
            history.map(item => (
              <div
                key={item.id}
                className="bg-base-100 p-4 rounded-xl shadow flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-2">
                  <div className="text-orange-400 text-2xl">{item.icon}</div>
                  <div>
                    <h1 className="font-semibold">{item.type}</h1>
                    <p className="text-sm text-neutral-500">{item.title}</p>
                  </div>
                </div>
                <span className="text-xs text-neutral-400">{item.time}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
