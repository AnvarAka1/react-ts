import React from 'react'

import { freelancerList } from 'src/mock/freelancer'
import WorklanceLayout from 'src/layouts/WorklanceLayout'
import { projectList } from 'src/mock/project'

import FreelancerDetail from '../components/FreelancerDetail'

function FreelancerDetailContainer () {
  const mockDetail = { isLoading: false, result: freelancerList[0] }
  const mockProjectList = { isLoading: false, results: projectList, count: 2 }

  const isLoading = mockDetail.isLoading || mockProjectList.isLoading

  return (
    <WorklanceLayout title="Freelancers">
      <FreelancerDetail
        isLoading={isLoading}
        detail={mockDetail.result}
        projectList={mockProjectList.results}
      />
    </WorklanceLayout>
  )
}

export default FreelancerDetailContainer
