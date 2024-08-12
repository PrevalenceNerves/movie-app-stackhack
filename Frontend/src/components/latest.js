import React from 'react'
import latests from '../assets/latests.png'

const Latest = () => {
  return (
    <div className=' m-16'>
        <h2 className=' font-bold text-left mb-10 text-2xl'>Latest news</h2>
        
        <div className=' columns-2'>
           <div>
            <img src={latests} h-12 w-12 alt='latest news'/>
           </div>
        </div>

    </div>
  )
}

export default Latest