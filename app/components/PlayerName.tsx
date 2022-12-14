'use client'
import { setConfig } from 'next/config'
import { useRouter } from 'next/navigation'
import { type } from 'os'
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ContextType } from '../../interface/interface'
import Context from './PlayersContext'
import styles from '../../styles/playername.module.css'

type Props = {
  realName: string,
  setRealName: (val : string) => void
}


function ConfirmName ({realName, setRealName} : Props ) {
    const context: ContextType = useContext(Context.AppContext)
    const [name, setName] = useState('')
    const router = useRouter()

    const handleChangeName = ( e : React.ChangeEvent<HTMLInputElement>) => {
     
      context.setConfig({
        ...context.config,
      playerName: e.target.value
     })
    }

    const handleConfirmName = (e : React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(context.config.playerName.length === 0){
        return Swal.fire({
          text:'The input must not be empty!',
          icon:'error',
          background:'black',
          color:'white',
          confirmButtonText:'green'
        })
      }
      if(context.config.playerName.length > 10 || context.config.playerName.length < 4){
        return Swal.fire({
          text:'The name must be greater than 4 letters or less than 10 letters!',
           icon:'error',
           background:'black',
           color:'white',
           confirmButtonColor:'green'
        })
         }
      setName(context.config.playerName)
    }

    useEffect(() => {
      if(name.length > 0) {
        localStorage.setItem('name', context.config.playerName)
        localStorage.setItem('avatar', context.config.avatar)
        router.push('/avatar')
      }
    },[name])

  return (
            <div className='flex justify-center w-full'>
              <div className='flex flex-col'>
                <span className={`${styles['text-name']} mb-2 text-xl text-center font-medium`}>Write your name for to play!</span>
              <input className={' bg-transparent  border-b-2  w-full mb-3 text-2xl p-1 w-full focus:outline-none  text-center'} onChange={handleChangeName} />
              <button className={`${styles['text-name']} bg-[#faea5a] text-xl transition duration:300ms hover:bg-[#5c5516] hover:text-white flex justify-center p-2 font-bold rounded-lg`} onClick={handleConfirmName}>Confirm your name!</button>
            </div>
            </div>
  )
}

export default ConfirmName