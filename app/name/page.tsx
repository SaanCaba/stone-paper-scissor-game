import React from 'react'
import Name from '../components/Name'
import ConfirmName from '../components/PlayerName'

function page() {
  return (
    <div className='h-screen w-full'>
        <div className='flex justify-center h-full items-center'>
            <Name />
        </div>
    </div>
  )
}

export default page