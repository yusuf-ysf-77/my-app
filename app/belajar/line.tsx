"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 80 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 200 },
  { value: 300 },
]

export default function LineChartComponent() {

  return (

    <div className="flex items-center justify-center ">

      <BarChart
        width={200}
        height={120}
        data={data}
      >
        <XAxis  dataKey="name" stroke="hide" tick={{ fill: "rgba(0, 0, 150, 0.5)" }} />
        <YAxis dataKey="value" hide />

        <Bar
          dataKey="value"
          fill="rgba(0, 0, 250, 0.5)"
          radius={[0,0,0,0]}
          label={{ position: "top", fill: "rgba(0, 0, 150, 0.5)" }}
        />

      </BarChart>

    </div>

  )
}
