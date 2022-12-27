import React from 'react'
import { Advertisement,Image } from 'semantic-ui-react'

const AdvertisementExampleCommonUnits = () => (
  <div>
    <Advertisement unit='medium rectangle' test='Medium Rectangle'><Image src="https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg"/>
    </Advertisement>

    <Advertisement unit='banner' test='Banner'><Image src="https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg"/> 
    </Advertisement>

    <Advertisement unit='leaderboard' test='Leaderboard'> <Image src="https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg"/> 

    </Advertisement>

    <Advertisement unit='large rectangle' test='Large Rectangle'> <Image src="https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg"/> 

    </Advertisement>

    <Advertisement unit='half page' test='Half Page'> <Image src="https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg"/> 

    </Advertisement>

  </div>
)

export default AdvertisementExampleCommonUnits