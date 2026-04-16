'use client';

import React, { useContext, useState } from 'react';
import { FriendsContext } from '@/components/ContaxtData';

const TimeLinePage = () => {
  const { data, history } = useContext(FriendsContext);
  const [filter, setFilter] = useState('all');

  const filterHistory =
    filter === 'all' ? history : history.filter(item => item.type === filter);

  return (
    <div className="min-h-[90vh] py-12 bg-linear-to-br from-base-100 to-base-200">
      <div className="w-11/12 md:w-8/12 mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-8">
          Timeline
        </h1>

        {/* Filter */}

        <div className="my-6 pb-10">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="select select-bordered rounded-xl shadow-md focus:outline-primary text-xl font-bold"
          >
            <option value="all">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-base-300 pt-6 space-y-8">
          {history.length === 0 ? (
            <p className="text-neutral-500">No activity yet</p>
          ) : (
            filterHistory.map(item => (
              <div key={item.id} className="relative group">
                {/* Dot */}
                <span className="absolute -left-3 top-2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md group-hover:scale-110 transition"></span>

                {/* Card */}
                <div className="bg-base-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    {/* Left Content */}
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className="text-2xl text-primary bg-primary/10 p-2 rounded-full">
                        {item.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h1 className="font-semibold text-neutral-700">
                          {item.type}
                        </h1>
                        <p className="text-sm text-neutral-500">{item.title}</p>
                      </div>
                    </div>

                    {/* Time */}
                    <span className="text-xs text-neutral-400 whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;
