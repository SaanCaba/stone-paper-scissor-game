'use client'
import React, { useState, useContext, useEffect } from 'react'
import messi from '../assets/messi.png'
import cat from '../assets/cat.png'
import women from '../assets/women.png'
import dog from '../assets/dog.png'
import Image, { StaticImageData } from 'next/image'
import { ContextType } from '../../interface/interface'
import Contexts from './PlayersContext'
import styles from '../../styles/image_item.module.css'
import Link from 'next/link'

function Avatar() {

    const context : ContextType = useContext(Contexts.AppContext)
    const [set, setSet] = useState(false)
    const [realImg, setRealImg] = useState<{}>('')
    const [avatares, setAvatares] = useState([
    {
        img: messi,
    },
    {
        img: women,
    },
    {
        img: cat,
    },
    {
        img: dog,
    },
])

    const handleClick = async (img: StaticImageData) => {
        setSet(true)
        setRealImg(img)
        context.setConfig({
            ...context.config,
            avatar: img
        })
        console.log(context.config.avatar.src)

    }

    useEffect(() => {
        if(context.config.avatar){
            localStorage.setItem('avatar', context.config.avatar.src)
        }
    }, [context.config.avatar])
    
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className="flex flex-col">
            <div className='flex justify-center w-full'>
                <span className='font-semibold mb-2 text-2xl text-underline'>Choose your avatar!</span>
            </div>
        <div className='p-3 rounded backdrop-brightness-75 flex justify-center items-center'>
        {
            avatares.map((e, i:number) => {
                return(
                    <li key={i} className='m-2  list-none transition duration:200ms hover:scale-110'>
                    <Image className={styles.images}  onClick={() => handleClick(e.img)} alt='img' src={e.img} width={120} height={120} />
                    </li>
                
                )
            })
        }
            
    </div>
    <div className='flex justify-center mt-5 '>
    {
            context.config.avatar && (
                <div>
                <Image className={styles.image} alt='dasd' height={0} width={200} src={context.config.avatar.src} />
                <Link href='/play'>
                <button className='font-bold p-2 rounded w-full bg-[#faea5a] text-xl transition duration:300ms hover:bg-[#5c5516] hover:text-white'>Play!</button>
                </Link>
                </div>
            )
        }
    </div>
    
        </div>
   
    </div>
  )
}

export default Avatar