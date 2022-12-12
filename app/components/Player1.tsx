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
    <div className='' >
      <PlayerSet items={items} setItems={setItems} />
      <div className='flex justify-center items-center mt-5' >
        <div className='flex flex-col'>
        <Image src={userProfile} alt='user img' width={100} />
        <span className='font-semibold'>Player: {context.config.playerName}</span>
        </div>
      </div>
      </div>
  )
}
