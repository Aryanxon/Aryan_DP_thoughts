import React, { useEffect, useState } from 'react'
import Card from './Card'
import Records from './data.json';

function Mainbottom() {

  const [ data, setData] = useState([]);
  useEffect(() => {
    setData(Records.tasks[0].assets);
    console.log(Records.tasks[0].assets);
    console.log(Records.tasks[0].assets[0].asset_title);

  }, [])


  return (
    <div className='mx-auto w-[70%]'>
        <div className='justify-between flex py-4'>
            <h1 className='text-4xl text-blue-700 font-bold'>Texhnical Project Management</h1>
            <button className='bg-blue-800 text-white rounded-lg px-8 hover:bg-blue-500'>Submit</button>
        </div>
        <div className='bg-slate-300 px-7 py-8 rounded-md'>
            <h1 className='text-2xl font-bold pb-4'>Explore the world of manegement</h1>
            <p className='text-md'>As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
        </div>
        <div className='grid grid-cols-2'>
          {data.map((items, i) => {
            return(
              <dir key={i}><Card title={items.asset_title} description={items.asset_description} /></dir>
            )
          })}
        </div>
    </div>
  )
}

export default Mainbottom
