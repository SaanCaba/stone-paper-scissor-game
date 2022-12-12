'use client'
import React,{useState} from 'react'
import ConfirmName from './PlayerName'

function Name() {
    const [realName, setRealName] = useState('')

  return (
    <div>
        <ConfirmName realName={realName} setRealName={setRealName} />
    </div>
  )
}

export default Name