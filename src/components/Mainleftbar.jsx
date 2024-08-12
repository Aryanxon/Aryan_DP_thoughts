import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import Records from './data.json';

function Mainleftbar() {
    const [data, setData] = useState(false);
    const title = Records.tasks[0].task_title;
    const lists = Records.tasks[0].assets;
  return (
    <div className='h-[600px] absolute bg-slate-300 rounded-r-lg shadow-lg shadow-gray-400' onMouseEnter={() => setData(!data)} onMouseLeave={() => setData(!data)}>
        <div className='flex flex-col w-full '>
            <div className='bg-black px-8 py-6 rounded-r-lg justify-between flex gap-24'>
                <div className={`text-xl text-white font-bold ${data? 'block' : 'hidden'} duration-300`}>Journey Board</div>
                <div className='bg-white p-1 rounded-full' ><FaArrowRight className={`${data? 'rotate-180' :""} duration-500`}/></div>
            </div>
            <div className='px-8 py-7'>
                <ul className={`${data? 'block' : 'hidden'} duration-300`}>
                    <li className='text-lg font-bold list-disc mb-6'>{title}</li>
                    {lists.map((items, i) => {
                        return(
                            <li key={i} className='text-lg font-semibold list-disc'>{items.asset_title}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Mainleftbar
