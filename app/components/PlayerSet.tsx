'use client'
import React, { useContext, useEffect, useState } from 'react'
import Item from './Item'

type Items = {
  name: string
  status : boolean
  img : string
}

type Props = {
   items:Array<{
  name: string
  status : boolean
  img : string
  }>
  setItems : (val: Items ) => void
  }

  //quitar este any
function PlayerSet({items, setItems} : any  ) { 
    const [start, setStart] = useState(false)
  return (
    <div className='relative h-full'>
      <div className='flex items-center'>
      {
      !start  ? (
        <div className='flex items-center'>
         <button className='text-[#E4a7b6] font-bold text-3xl transition duration:400ms hover:text-[#22221E] animate-pulse ' onClick={() => setStart(true)}>START!</button> 
         </div>
         )
         : ''
      }
      </div>
      <div className='h-full '>
      {
        start && (
          <div>
            <div className='flex justify-center'>
            <span className='text-white text-xl'>Choose One!</span>
            </div>
          <nav className='flex items-center h-full '>
          {items.map((e : Items, i : number ) => {
            return (
              <Item key={i} element={e} i={i}  />
            )
          })}
          </nav>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default PlayerSet