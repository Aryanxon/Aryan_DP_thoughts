import React, { useEffect, useState } from 'react'
import Mainleftbar from './Mainleftbar'
import Mainbottom from './Mainbottom'
import Mainrightbar from './Mainrightbar'

function Mainsection() {

  return (
    <div className='flex my-4'>
        <Mainleftbar/>
        <Mainbottom/>
        <Mainrightbar/>
    </div>
  )
}

export default Mainsection
