'use client'
import React, { useState, useContext } from 'react'
import { AllItems, ContextType } from '../../interface/interface'
import Player1 from './Player1'
import Player2 from './PlayerCPU'
import papel from '../assets/papel.png'
import piedra from '../assets/piedra.png'
import tijera from '../assets/tijera.png'
import Name from './Name'
import Results from './Results'



function ContPlayers() {
  

  const [items, setItems] = useState<any>([
         {
            name: 'Scissors',
            status: false,
            img: tijera
        },
        {
            name: 'Paper',
            status: false,
            img: papel
        },
        {
            name: 'Stone',
            status: false,
            img: piedra
        } 
    ])
    
  return (
    <div className='w-full max-sm:-mt-6 overflow-hidden  max-sm:mb-6'>
      <div className='flex justify-center items-center h-full  w-full ' >
      <div className='relative w-full flex justify-center items-center h-4/5 bg-[#AA2B4A] rounded mr-1 ml-2 max-sm:mr-0 max-sm:ml-1' >
          <Player1 items={items} setItems={setItems} />
      </div>
      <Results />
      <div className='w-full flex justify-center items-center h-4/5 bg-[#071e26] rounded mr-2 ml-1 max-sm:mr-1 max-sm:ml-0'>
      <Player2 />
      </div>
      </div>
      
    </div>
  )
}

export default ContPlayers