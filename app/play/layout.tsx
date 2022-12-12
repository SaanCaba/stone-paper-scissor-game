import Link from 'next/link'
import React from 'react'
import ConfigProvider from '../components/ConfigProvider'
import styles from './play.module.css'
import {RiRocket2Line} from 'react-icons/ri'

function PlayLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
  return (
    <div style={{height:'100vh'}}>
        <div >
        <header>
            <div className='w-full flex justify-center mt-2 max-sm:-mb-6'>
            <span className='text-2xl font-semibold select-none duration:200ms transition hover:scale-110 '>Let's play!  </span><span><RiRocket2Line color='black' className='mt-2 animate-pulse duration:300ms transition hover:rotate-45' size={25} /></span>
            </div>
        </header>
       <main >{children}</main> 
        </div>
    </div>
  )
}

export default PlayLayout