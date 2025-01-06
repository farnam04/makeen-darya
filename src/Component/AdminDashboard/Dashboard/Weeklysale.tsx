"use client"
import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 150, 180, 220, 200, 250, 300],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

export default function Weeklysale() {
  return (
    <div className='w-full h-full rounded-[10px] border-[0.5px] border-black flex pt-[30px] pr-[10px] bg-white' >
<div className='h-full  w-3/12 flex  justify-start  ' >
<p className='text-[16px]' >فروش امار هفتگی :</p>
</div>
<div className='h-full w-9/12 flex justify-center'><Line  data={data} /></div>
    </div>
  )
}
