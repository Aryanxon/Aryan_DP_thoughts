import React from 'react'
import { FaHome, FaBell } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import Photo from '../assets/Photo.jpg'

function Navbar() {
  return (
    <div className='w-full bg-slate-200 shadow-lg shadow-gray-300 flex justify-between px-16 py-5'>
        <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" className='w-[300px]'/>
        <ul className='flex items-center text-white gap-4'>
           <li className='bg-blue-400 rounded-full p-4 text-xl cursor-pointer hover:bg-blue-700'><FaHome /></li>
           <li className='bg-blue-400 rounded-full p-4 text-xl cursor-pointer hover:bg-blue-700'><HiMiniWrenchScrewdriver /></li>
           <li className='bg-blue-400 rounded-full p-4 text-xl cursor-pointer hover:bg-blue-700'><FaBell /></li>
           <li className= 'rounded-full text-xl cursor-pointer'><img src={Photo} alt="Professional photo" className='rounded-full w-[55px] h-[55px]'/></li>
           <li className='text-blue-400 rounded-full p-4 text-2xl cursor-pointer hover:bg-blue-700 hover:text-white'><BsThreeDotsVertical /></li>
        </ul>
    </div>
  )
}

export default Navbar
