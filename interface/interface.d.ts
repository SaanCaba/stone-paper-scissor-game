import { StaticImageData } from "next/image"

export type Config = {
        points1?: number,
        pointsCPU?:number,
        playerName?: string | null, 
        player1Item?: string,
        cpuItem? : {
            name: string,
            img: StaticImageData
        },
        confirm?:boolean
}

export type ContextType = {
    config: {
        points1: number,
        pointsCPU:number,
        playerName: string,
        player1Item: string,
        cpuItem: {
            name: string,
            img: StaticImageData
        },
        confirm: boolean,
        playerPoints:{
            p1: number,
            cpu:number
        }
      }
    setConfig: (val : Config ) => void  
}

export type AllItems = {
    items : Array<{
        name: string,
        status: false,
        img: string
    },
    {
        name: string,
        status: false,
        img: string
    },
    {
        name: string,
        status: false,
        img: string
    }>
    setItems?: (val : string) => void
}
