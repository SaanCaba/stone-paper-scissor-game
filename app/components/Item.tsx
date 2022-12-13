'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { ContextType } from '../../interface/interface'
import Context from './PlayersContext'
import Swal from 'sweetalert2'
import styles from '../../styles/item.module.css'

type Props = {
   element:{
    img:string
    name: string
    status: boolean
   } 
   i: number
}


function Item({element, i}  : Props ) {

    const context: ContextType = useContext(Context.AppContext)

    const selectItem = (id : string)  => {
        
        let item = document.getElementById(id)
        context.setConfig({
          ...context.config,
          player1Item: item?.innerText,
          confirm:true
        })

    }

      

  return (
    <>
    <div className={context.config.confirm ? styles['item-confirm'] : 'display-none'}>
    <li className={ context.config.confirm ? `${styles.itemli} text-xl m-1 p-1` :'text-xl list-none transition duration-400 text-white hover:scale-105 p-1 m-1 ' } id={element.name} key={i}  onClick={() => selectItem(element.name) }>
    <Image className=' cursor-pointer' src={element.img} alt={element.name} width={200} />
    <div className='flex justify-center'>
    <small className='text-center'>{element.name}</small>
    </div>
    </li>
    </div>
    </>
  )
}

export default Item