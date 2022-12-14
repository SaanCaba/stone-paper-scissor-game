'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ContextType } from '../../interface/interface'
import Context from './PlayersContext'
import loader from '../assets/loadercpu.gif'
import Image from 'next/image'
import Loader from './Loader'
import papel from '../assets/papel.png'
import piedra from '../assets/piedra.png'
import tijera from '../assets/tijera.png'
import bot from '../assets/bot.png'
import Swal, { SweetAlertCustomClass } from 'sweetalert2'


function alert(conf : string, name? : string, img?: string){
    if(conf === 'wincpu'){
       return Swal.fire({
           title:'CPU Winner!',
           color:'white',
           text:'Keep trying!',
           imageUrl:'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
           imageWidth: 200,
           imageHeight: 200,
           background: '#071e26',
           cancelButtonColor:'red',
           cancelButtonAriaLabel:'X',
           showConfirmButton: false,
           showCloseButton:true
       })
   }
   if(conf === 'winp1'){
    return Swal.fire({
        title:`${name} wins!`,
        text:'Congrats!',
        html: `<div style='display:flex; justify-content:center'>
        <div style='display:flex; flex-direction:column'>
        <img width='230' height='230' src=${img} />
        <span style=font-weight: 'bold'>Congrats ${name}!</span>
        </div>
        </div>`,
        background:'#AA2B4A',
        showConfirmButton: false,
        color:'white',
        cancelButtonColor:'red',
        cancelButtonAriaLabel:'X',
        showCloseButton:true
    })
   }
    if(conf === 'tie'){
        return Swal.fire({
            text:'Tie!',
            background:'#e3be59',
            imageUrl:'https://images.vexels.com/media/users/3/158040/isolated/preview/ceb5cf4a02d45fa49dc671e7d2014c32-icono-de-trazo-de-apreton-de-manos.png',
            imageWidth: 200,
            imageHeight: 200,
            color:'black'
        })
    }
    if(conf === 'player1'){
        return Swal.fire({
            text:`Points for ${name}`,
            icon:'success',
            color:'white',
            html: `<div style='display:flex; justify-content:center'>
            <div style='display:flex; flex-direction:column'>
            <img width='200' height='200' src=${img} />
            <span style=font-weight: 'bold'>Points for ${name}</span>
            </div>
            </div>`,
            confirmButtonColor:'#4dc46d',
            confirmButtonText:'Ok',
            background:'#AA2B4A',
            footer:'More close off the win'
        })
    }
    return Swal.fire({
        text:'Points for CPU',
        icon:'error',
        imageUrl:'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
        imageWidth: 200,
        imageHeight: 200,
        background: '#071e26',
        color:'white',
        footer:'The next round its yours!'
    })
    
}

function PlayerCPUSet() {
    const [load, setLoading] = useState(false)
    const [points, setPoints] = useState(false)
    const [botB, setBotB] = useState(true)
    const context: ContextType = useContext(Context.AppContext)
    
    const selectRandomItem = async () => {
        setLoading(true)
        setBotB(false)
        await setTimeout(() => {
              var items = [
                {name: "Scissors", img: tijera},
                {name:"Paper", img: papel},
                {name:"Stone", img: piedra}
              ];

            context.setConfig({
                ...context.config,
                playerName: context.config.playerName,
                cpuItem: items[Math.floor(Math.random()*items.length)],
                confirm:false
            })
            setLoading(false)
            setPoints(true)
        },3000)

    }

    useEffect(() => {
        if(context.config.confirm === true){
            selectRandomItem()
        }
        if(context.config.pointsCPU === 3){
            (async() => await alert('wincpu'))()
            setLoading(false)
            setBotB(true)
            return;
        }
        if(context.config.points1 === 3){
            (async() => await alert('winp1', context.config.playerName, context.config.avatar.src || context.config.avatar))()
            setLoading(false)
            setBotB(true)
            return;
         }
        if(points === true){
            
            if(context.config.player1Item === context.config.cpuItem.name){
              (async()  => await alert('tie'))()
               return setPoints(false)
            }
            if(context.config.player1Item === 'Scissors' && context.config.cpuItem.name === 'Paper'){
               (async()  => await alert('player1', context.config.playerName, context.config.avatar.src || context.config.avatar))()
               context.setConfig({
                ...context.config,
                points1: context.config.points1 + 1
                
            })
               return setPoints(false)
            }
            if(context.config.player1Item === 'Paper' && context.config.cpuItem.name === 'Stone'){
                (async()  => await alert('player1', context.config.playerName, context.config.avatar.src || context.config.avatar))()
                context.setConfig({
                    ...context.config,
                    points1: context.config.points1 + 1
                    
                })
                return setPoints(false)
            }
            if(context.config.player1Item === 'Stone' && context.config.cpuItem.name === 'Scissors'){
                (async()  => await alert('player1', context.config.playerName, context.config.avatar.src || context.config.avatar))()
                context.setConfig({
                    ...context.config,
                    points1: context.config.points1 + 1
                    
                })
                return setPoints(false) 
            }
            (async()  => await alert('cpu'))()
            context.setConfig({
                ...context.config,
                pointsCPU: context.config.pointsCPU + 1
            })
            return setPoints(false)
        }
    },[context.config.confirm, context.config.pointsCPU, context.config.points1])


  return (
    <div className=''>
        { botB &&
        <div className='flex justify-center '>
            <div className='flex flex-col'>
                <Image className='transition duration:500ms animate-bounce' src={bot} width={200} alt='bot img' />
            </div>
        </div>
        }
        <div>
        {
            load && (
            <div>
            <Loader />
            {/* <Image src={bot} width={200} alt='bot img' /> */}
            </div>
            
            )
        }
        {
            context.config.cpuItem && !load && !botB && (
                <div className='flex justify-center'>
                 <div className='flex flex-col'>
            <Image src={context.config.cpuItem.img} width={200} alt={context.config.cpuItem.name} />
            <span className='text-center text-white'>{context.config.cpuItem.name}</span>
                </div>
            </div>
            )
        }
        </div>
    </div>
  )
}

export default PlayerCPUSet