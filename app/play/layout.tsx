import Link from 'next/link'
import React from 'react'
import ConfigProvider from '../components/ConfigProvider'
import styles from './play.module.css'

function PlayLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
  return (
    <div style={{height:'100vh'}}>
        <div >
        <header>
            <Link href='/'>
            <span>Volver al home</span>
            </Link>
        </header>
       <main >{children}</main> 
        </div>
    </div>
  )
}

export default PlayLayout