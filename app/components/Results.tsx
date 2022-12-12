'use client'
import React, { useContext, useEffect } from 'react'
import { ContextType } from '../../interface/interface'
import Contexts from './PlayersContext'

function Results() {
    const context: ContextType = useContext(Contexts.AppContext)

    useEffect(() => {
      if(context.config.points1 === 3 || context.config.pointsCPU === 3){
      context.setConfig({
        ...context.config,
        points1: 0,
        pointsCPU: 0
       })
      }
    }, [context.config.points1,context.config.pointsCPU ])

    return (
    <div className='bg-[#DCE67B] w-2/5 rounded p-2 max-sm:w-1/5'>
    <div className='flex justify-center'>
      <span className='max-sm:text-xl text-2xl text-center font-semibold'>BEST OF THREE</span>
    </div>
    <div className='flex justify-center'>
      <div className='mr-1'>
        <span className='text-3xl'>{context.config.points1}</span>
      </div>
      <div >
        <span className='text-3xl'>VS</span> 
      </div>
      <div className='ml-1' >
        <span className='text-3xl'>{context.config.pointsCPU}</span>
      </div>
    </div>
    </div>
  )
}

export default Results