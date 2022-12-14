'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ContextType } from '../../interface/interface'
import Item from './Item'
import Contexts from './PlayersContext'

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
    const context : ContextType = useContext(Contexts.AppContext)
    useEffect(() => {
      if(context.config.playerName){
      if(context.config.playerName.length === 0){
        let name = localStorage.getItem('name')
        let avatar= localStorage.getItem('avatar')
        console.log(typeof avatar)
        if(name !== null || name !== undefined){
          context.setConfig({
            ...context.config,
            playerName: name,
            avatar: avatar
          })
        }else{
          context.setConfig({
            ...context.config,
            playerName: 'user'
          })
        }
      }
    }

    }, [context.config.playerName])
    return (
    <div className='w-full m-2' >
      <div className='w-full h-full flex justify-center items-center' >
      {
      !start  ? (
        <div className=''>
         <button className='text-[#E4a7b6] font-bold text-3xl transition duration:400ms hover:text-[#22221E] animate-pulse ' onClick={() => setStart(true)}>START!</button> 
         </div>
         )
         : ''
      }
      {
        start && (
          <div className=''>
            <div className='flex justify-center'>
            <span className='text-white text-xl'>Choose One!</span>
            </div>
          <nav className='flex items-center h-full max-sm:flex-col'>
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
      {/* <div className=' '>
      {
        start && (
          <div className='bg-white'>
            <div className='flex justify-center'>
            <span className='text-white text-xl'>Choose One!</span>
            </div>
          <nav className='flex items-center h-full max-sm:flex-col'>
          {items.map((e : Items, i : number ) => {
            return (
              <Item key={i} element={e} i={i}  />
            )
          })}
          </nav>
          </div>
        )
      }
      </div> */}
    </div>
  )
}

export default PlayerSet