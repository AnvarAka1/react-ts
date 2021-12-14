import React from 'react'

import WorklanceLayout from 'src/layouts/WorklanceLayout'
import { freelancerList } from 'src/mock/freelancer'

import FreelancerList from '../components/FreelancerList'

function FreelancerListContainer () {
  const mockList = { isLoading: false, results: freelancerList }

  return (
    <WorklanceLayout title="Freelancers">
      <FreelancerList
        list={mockList}
      />
    </WorklanceLayout>
  )
}

export default FreelancerListContainer
