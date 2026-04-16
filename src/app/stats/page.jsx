'use client';

import React, { useContext } from 'react';
import { FriendsContext } from '@/components/ContaxtData';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const COLORS = {
  Text: '#8b5cf6',
  Call: '#1f3d2e',
  Video: '#22c55e',
};

const StatsPage = () => {
  const { data, history } = useContext(FriendsContext);

  const typeCounts = history.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(typeCounts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-base-200 py-10">
      <div className="w-10/12 mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-2xs shadow-amber-100">
          <h1 className="text-xl font-semibold text-neutral-600">
            By Interaction Type
          </h1>

          <div className="flex items-center justify-center mt-4">
            {chartData.length === 0 ? (
              <p className="text-neutral-400 py-16">No interactions yet</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={130}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[entry.name] || '#94a3b8'}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
