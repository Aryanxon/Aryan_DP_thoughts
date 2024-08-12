import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaQuestion } from "react-icons/fa6";
import { GiRoundTable } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

function Mainrightbar() {

  return (
   <div className='flex flex-col justify-between'>
    <div className='w-[100px] h-[400px] shadow-2xl shadow-gray-600 flex rounded-l-2xl'>
    <div className=' bg-black text-white rounded-l-2xl px-2 py-4'>
        <div className='mb-6'><RxCross1 className='mx-auto text-4xl'/></div>
        <ul className='text-white px-4 mb-4'>
            <li>N</li>
            <li>o</li>
            <li>t</li>
            <li>i</li>
            <li>c</li>
            <li>e</li>
        </ul>
        <ul className='text-white px-4'>
            <li>B</li>
            <li>o</li>
            <li>a</li>
            <li>r</li>
            <li>d</li>
        </ul>
    </div>
    <div className='w-[40%]'></div>
    </div>
    <div className='mx-auto'>
        <ul className=''>
            <li className='text-white bg-blue-800 p-3 text-4xl rounded-full mb-4 cursor-pointer hover:bg-blue-700'><FaQuestion /></li>
            <li className='text-white bg-blue-800 p-3 text-4xl rounded-full mb-4 cursor-pointer hover:bg-blue-700'><GiRoundTable /></li>
            <li className='text-white bg-blue-800 p-3 text-4xl rounded-full mb-4 cursor-pointer hover:bg-blue-700'><SlCalender /></li>
        </ul>
    </div>
   </div>
  )
}

export default Mainrightbar
