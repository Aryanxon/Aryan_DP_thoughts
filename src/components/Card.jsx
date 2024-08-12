import React from 'react'
import ReactPlayer from 'react-player/youtube'

function Card({title, description}) {

  return (
    <div className='mx-4 mt-8 h-[700px] rounded-lg shadow-lg shadow-gray-400'>
      <div className='bg-black text-white text-xl flex justify-center py-4 rounded-t-lg '>{title}</div>
      <div className='text-md px-4 py-4'><span className='text-md font-bold mr-2'>Description:</span>{description}</div>
      <ReactPlayer url=" https://www.youtube.com/embed/TiMRwri1xJ8" width="100%" height="300px"/>
    </div>
  )
}

export default Card
