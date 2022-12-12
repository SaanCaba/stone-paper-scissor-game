'use client'
import React, {useContext} from 'react'
import Contexts from '../components/PlayersContext'
import { ContextType } from '../../interface/interface'

function RealName() {
  const context : ContextType = useContext(Contexts.AppContext)
  return (
        <div className=''>
        <span className='bottom-1 font-bold text-red-600 text-xl' style={{right:'45%'}}>Player: {context.config.playerName}</span>
      </div>
  )
}

export default RealName