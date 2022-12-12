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
    <div className='w-full'>
      <div className='flex justify-center items-center h-full  w-full' >
      <div className='relative w-full flex justify-center items-center h-4/5 bg-[#AA2B4A]  rounded' style={{marginLeft:'14px', marginRight:'6px'}}>
          <Player1 items={items} setItems={setItems} />
      </div>
      <Results />
      <div className='w-full flex justify-center items-center h-4/5 bg-[#071e26] rounded' style={{marginRight:'14px', marginLeft:'6px'}}>
      <Player2 />
      </div>
      </div>
      
    </div>
  )
}

export default ContPlayers