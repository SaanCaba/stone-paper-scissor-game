'use client'
import { createContext, useContext } from "react";
import React, { useState } from "react";
import { ScriptProps } from "next/script";
import Contexts from "./PlayersContext";



function ConfigProvider({ children } : ScriptProps) {
       const [config, setConfig] = useState({
          points1: 0,
          pointsCPU:0,
          playerName: '',
          player1Item: '',
          cpuItem: '',
          confirm: false, 
          playerPoints: {
                p1: 0,
                cpu:0
          }
   });
    return (
    <Contexts.AppContext.Provider value={{config, setConfig}}>
            {children}
    </Contexts.AppContext.Provider>
 );
}

export default ConfigProvider;