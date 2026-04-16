'use client'

import FrindsData from "@/components/FrindsData";
import { FriendsContext } from "@/components/ContaxtData";
import { useContext } from "react";



export default function Home() {

  const { data, history } = useContext(FriendsContext)


  const catoriyItem = [
    { title: "Total Friends", count: data.length },
    { title: "On Track", count: data.filter(item => item.status === 'on-track').length },
    { title: "Need Attention", count: data.filter(item => item.status === 'overdue' || item.status === 'almost due').length },
    { title: "Need Attention", count: history.length },
  ]

  return (
    <div className="min-h-screen py-10">
      <div className=" w-10/12 mx-auto">
        {/* Text */}

        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-2xl text-center md:text-4xl lg:text-5xl font-bold text-neutral-600">
            Friends to Keep close in your life</h1>
          <p className="text-xs md:text-lg font-semibold text-neutral-600 text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.</p>
          <div className="flex items-center justify-center">
            <button className="btn bg-green-800 px-8 py-2 rounded-2xl cursor-pointer text-white hover:bg-green-600 duration-300">+ Add a Friend </button>
          </div>
        </div>

        {/* Cartoriy */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-6">

          {
            catoriyItem.map((cotariy, index) => (
              <div key={index} className="bg-base-200 p-6 rounded-2xl shadow-2xs shadow-blue-100 flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-bold"> {cotariy.count} </h1>
                <span className="text-lg md:text-2xl font-bold"> {cotariy.title} </span>
              </div>
            ))
          }
        </div>

        {/* data loade */}

        <div>
          <FrindsData />
        </div>

      </div>
    </div>
  );
}
