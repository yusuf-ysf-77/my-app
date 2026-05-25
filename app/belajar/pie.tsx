"use client";
import { useEffect, useState } from "react"

import {
  PieChart,
  Pie,
  Cell,
} from "recharts"

const data = [
  { name: "Red", value: 150 },
  { name: "Blue", value: 500 },
  { name: "Green", value: 200 },
]

const colors = [
  "rgba(250, 0, 0, 0.5)",
  "rgba(0, 0, 250, 0.5)",
  "rgba(0, 250, 0, 0.5)"
]

export default function PiePage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-white rounded-full shadow-[10px_10px_40px_0px_rgba(0,0,0,0.07)] w-30 h-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-18 w-18 rounded-full bg-white border-6 ">
            <p className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500 whitespace-nowrap ${show ? "opacity-100" : "opacity-0 "} transition-normal
      duration-3000 `}>Pie Chart</p>
        </div>
        <div className="flex items-center justify-center ">
            <PieChart width={200} height={200}>
                <Pie
                data={data}
                dataKey="value"
                innerRadius={30}
                outerRadius={42}
                label={{textAnchor: "middle", fill: "", fontSize: 10}}
                >
                {data.map((entry, index) => (<Cell key={index} fill={colors[index]}/>))}
                </Pie>
            </PieChart>
        </div>
    </div>
  )
}