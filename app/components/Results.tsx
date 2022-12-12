'use client'
import React, { useContext, useEffect } from 'react'
import { ContextType } from '../../interface/interface'
import Contexts from './PlayersContext'

function Results() {
    const context: ContextType = useContext(Contexts.AppContext)
    console.log(context.config)
    return (
    <div className='bg-[#DCE67B] w-2/5 rounded p-2'>
    <div className='flex justify-center'>
      <span className='text-2xl text-center font-semibold'>Results</span>
    </div>
    <div className='flex justify-center'>
      <div className='mr-1'>
        <span className='text-xl'>{context.config.points1}</span>
      </div>
      <div >
        <span className='text-xl'>VS</span> 
      </div>
      <div className='ml-1' >
        <span className='text-xl'>{context.config.pointsCPU}</span>
      </div>
    </div>
    </div>
  )
}

export default Results