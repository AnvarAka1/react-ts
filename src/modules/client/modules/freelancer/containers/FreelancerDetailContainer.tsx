import React from 'react'
import { useParams } from 'react-router-dom'

import WorklanceLayout from 'src/layouts/WorklanceLayout'

import { SelectedProjectsType } from '../types'
import {
  useFreelancerDetail,
  useFreelancerProjectList,
  useMyProjectList,
  useMyProjectsRequestCancel,
  useMyProjectsRequestSend
} from '../hooks'
import { projectRequestSerializer } from '../serializers'
import FreelancerDetail from '../components/FreelancerDetail'

function FreelancerDetailContainer () {
  const { id } = useParams<{ id: string }>()
  const freelancerDetail = useFreelancerDetail(id)
  const freelancerProjectList = useFreelancerProjectList(id)
  const myProjectList = useMyProjectList()
  const myProjectsRequest = useMyProjectsRequestSend(id)
  const myProjectsRequestCancel = useMyProjectsRequestCancel(id)

  const isLoading = freelancerDetail.isLoading || freelancerProjectList.isLoading

  const handleRequestSend = async (values: SelectedProjectsType) =>
    myProjectsRequest.create(projectRequestSerializer(values))

  const handleRequestCancel = async () =>
    myProjectsRequestCancel.remove()

  return (
    <WorklanceLayout title="Freelancers">
      <FreelancerDetail
        isLoading={isLoading}
        detail={freelancerDetail.detail}
        projectList={freelancerProjectList.results}
        onRequestSend={handleRequestSend}
        onRequestCancel={handleRequestCancel}
        myProjectsListObject={myProjectList}
      />
    </WorklanceLayout>
  )
}

export default FreelancerDetailContainer
