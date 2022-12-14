'use client'
import { Inter, Roboto } from '@next/font/google';
import React, { useContext, useEffect } from 'react'
import { ContextType } from '../../interface/interface'
import Contexts from './PlayersContext'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

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
    <div className='backdrop-brightness-105 h-4/5 justify-center flex items-center w-2/5 rounded p-2 max-sm:w-1/5'>
      <div className="flex justify-center flex-col">
    <div className='flex justify-center'>
      <span className={`${roboto.className} max-sm:text-xl text-2xl text-center font-semibold`}>BEST OF THREE</span>
    </div>
    <div className='flex justify-center'>
      <div className='mr-1'>
        <span className={`${roboto.className} text-[#AA2B4A] max-sm:text-xl  text-3xl`}>{context.config.points1}</span>
      </div>
      <div >
        <span className={`${roboto.className} max-sm:text-xl text-3xl`}>VS</span> 
      </div>
      <div className='ml-1' >
        <span className={`${roboto.className} max-sm:text-xl text-[#071e26] text-3xl`}>{context.config.pointsCPU}</span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Results