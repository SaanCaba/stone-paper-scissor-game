import React, {useContext} from 'react'
import ContPlayers from '../components/ContPlayers'
import Name from '../components/Name'
import Player1 from '../components/Player1'
import Player2 from '../components/PlayerCPU'
import styles from './play.module.css'


function page() {
  return (
    <div>
      {/* <div>
      <RealName />
      </div> */}
    <div className={styles.cont}>
      <ContPlayers />
    </div>
    </div>
  )
}

export default page