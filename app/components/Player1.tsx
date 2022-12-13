import Image from 'next/image';
import React, { createContext, useContext, useState } from 'react'
import { AllItems, ContextType } from '../../interface/interface';
import Contexts from './PlayersContext';
import PlayerSet from './PlayerSet';
import userProfile from '../assets/user.png'

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


export default function Player1({items, setItems}: Props){

  const context: ContextType = useContext(Contexts.AppContext)

  return(
    <div className='w-full h-full mb-4'>
      <div className='h-full flex'>
      <PlayerSet items={items} setItems={setItems} />
      </div>
      </div>
  )
}
