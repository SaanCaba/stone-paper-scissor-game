'use client'
import React, { useState, useContext, useEffect } from 'react'
import { AllItems, ContextType } from '../../interface/interface'
import Player1 from './Player1'
import Player2 from './PlayerCPU'
import papel from '../assets/papel.png'
import piedra from '../assets/piedra.png'
import tijera from '../assets/tijera.png'
import Name from './Name'
import Results from './Results'
import Contexts from './PlayersContext'
import Image from 'next/image'
import bot from '../assets/bot.png'
import Loader from './Loader'
import styles from '../../styles/spinner.module.css'


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
    
    const context : ContextType = useContext(Contexts.AppContext)
    console.log(context.config.playerName.length)

    useEffect(() => {
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
    }, [context.config.playerName])
  return (
    <div className='w-full max-sm:-mt-6   max-sm:mb-6'>
      <div className='flex justify-center items-center h-full  w-full ' >
        <div className='rounded relative w-full flex h-4/5 bg-[#AA2B4A] rounded mr-1 ml-2 max-sm:mr-0 max-sm:ml-1'>
          <div className="flex flex-col w-full">
            <div className='rounded-t-lg w-full flex justify-center  bg-[#CB3459] p-3'>
              {
                context.config.playerName.length === 0 ? <div className={styles.spin}></div> : (
                  <div className='flex'>
                <Image alt='user-img' width={50} height={50} src={context.config.avatar} />  <span className='font-semibold text-3xl text-white p-2'>{context.config.playerName}</span>
                  </div>
                )
              }
            </div>
          <Player1 items={items} setItems={setItems} />
          </div>
        </div>
      <Results />
        <div className='rounded w-full flex relative h-4/5 bg-[#071e26] rounded-md mr-2 ml-1 max-sm:mr-1 max-sm:ml-0'>
      <div className='flex flex-col h-full w-full'>
        <div className='rounded-t-lg w-full flex justify-center bg-[#0C3948] p-3'>
         <Image src={bot} alt='bot-img' width={50}  /> <span className='font-semibold text-3xl text-white p-2'>CPU</span>
        </div>
        <div className="h-full flex justify-center items-center">
        <Player2 />
        </div>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default ContPlayers