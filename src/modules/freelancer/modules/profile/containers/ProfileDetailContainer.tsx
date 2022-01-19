import React from 'react'

import { WorklanceLayout } from 'src/layouts'
import { FreelancerType } from 'src/types'

import { useProfileDetail, useProfileGeneralUpdate, useProfileSecurityUpdate } from '../hooks'
import ProfileDetail from '../components/ProfileDetail'
import { PasswordUpdateType } from '../types'

function ProfileDetailContainer () {
  const profileDetail = useProfileDetail()
  const profileGeneralUpdate = useProfileGeneralUpdate()
  const profileSecurityUpdate = useProfileSecurityUpdate()

  const handleGeneralSubmit = (values: FreelancerType) =>
    profileGeneralUpdate.update(values)

  const handleSecuritySubmit = (values: PasswordUpdateType) =>
    profileSecurityUpdate.update(values)

  return (
    <WorklanceLayout title="Профиль">
      <ProfileDetail
        detail={profileDetail.detail}
        onGeneralSubmit={handleGeneralSubmit}
        onSecuritySubmit={handleSecuritySubmit}
      />
    </WorklanceLayout>
  )
}

export default ProfileDetailContainer
