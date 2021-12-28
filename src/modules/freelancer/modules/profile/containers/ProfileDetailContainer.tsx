import React from 'react'

import { WorklanceLayout } from 'src/layouts'
import { freelancerList } from 'src/mock/freelancer'
import { FreelancerType } from 'src/types'

import ProfileDetail from '../components/ProfileDetail'

function ProfileDetailContainer () {
  const detail = freelancerList[0]

  const handleGeneralSubmit = (values: FreelancerType) => {

  }

  const handleSecuritySubmit = (values: FreelancerType) => {

  }

  return (
    <WorklanceLayout title="Профиль">
      <ProfileDetail
        detail={detail}
        onGeneralSubmit={handleGeneralSubmit}
        onSecuritySubmit={handleSecuritySubmit}
      />
    </WorklanceLayout>
  )
}

export default ProfileDetailContainer
