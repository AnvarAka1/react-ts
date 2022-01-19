import React from 'react'

import WorklanceLayout from 'src/layouts/WorklanceLayout'

import FreelancerList from '../components/FreelancerList'
import { useFreelancerList } from '../hooks'

function FreelancerListContainer () {
  const freelancerList = useFreelancerList()

  return (
    <WorklanceLayout title="Freelancers">
      <FreelancerList
        list={freelancerList}
      />
    </WorklanceLayout>
  )
}

export default FreelancerListContainer
