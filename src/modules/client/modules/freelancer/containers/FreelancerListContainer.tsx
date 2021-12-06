import React from 'react'
import FreelancerList from '../components/FreelancerList'
import WorklanceLayout from 'src/layouts/WorklanceLayout'
import {freelancerList} from 'src/mock/freelancer'
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
