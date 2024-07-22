import React from 'react'
import IntroPage from './__components/IntroPage'
import DevelopmentCycle from './__components/DevelopmentCycle'
import Acheivement from './__components/Acheivement'
import DiscussProject from './__components/DiscussProject'
import DevelopmentStages from './__components/DevelopmentStages'
import TeamInfo from './__components/TeamInfo'

export default function page() {
  return (
    <div className=''>
      <IntroPage />
      <DevelopmentCycle />
      <Acheivement />
      <DiscussProject />
      <DevelopmentStages />
      <TeamInfo />
    </div>
  )
}
