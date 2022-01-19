import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { FreelancerType, ProjectType } from 'src/types'
import PageContainer from 'src/components/PageContainer'
import useDialog from 'src/hooks/useDialog'
import { ListType } from 'src/types/crud'
import { DetailDTO } from 'src/api/types'

import FreelancerCard from './FreelancerCard'
import ProjectsCard from './ProjectsCard'
import GeneralInfoCard from './GeneralInfoCard'
import RequestDialogForm from './RequestDialogForm'

import { SelectedProjectsType } from '../../types'

type Props = {
  readonly isLoading: boolean
  readonly detail: FreelancerType | null
  readonly projectList: ProjectType[] | null
  readonly myProjectsListObject: ListType<ProjectType>
  readonly onRequestSend: (values: SelectedProjectsType) => Promise<DetailDTO<null>>
  readonly onRequestCancel: () => Promise<void>
}

function FreelancerDetail (props: Props) {
  const {
    isLoading,
    detail,
    projectList,
    myProjectsListObject,
    onRequestSend,
    onRequestCancel
  } = props

  const { open, handleOpen, handleClose } = useDialog()

  const isRequestSent = false

  const handleRequestSend = async (values: SelectedProjectsType) => {
    try {
      await onRequestSend(values)
    } finally {
      handleClose()
    }
  }

  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} lg={8}>
          <Box mb={2}>
            {!isLoading && detail && <FreelancerCard freelancer={detail} />}
          </Box>
          <Box>
            <ProjectsCard projects={projectList} />
          </Box>
        </Grid>
        <Grid item={true} xs={12} lg={4}>
          {!isLoading && detail && (
            <GeneralInfoCard
              freelancer={detail}
              isRequestSent={isRequestSent}
              onRequestDialogOpen={handleOpen}
              onRequestCancel={onRequestCancel}
            />
          )}
        </Grid>
      </Grid>
      <RequestDialogForm
        open={open}
        onClose={handleClose}
        initialValues={{ projects: myProjectsListObject.results }}
        onSubmit={handleRequestSend}
      />
    </PageContainer>
  )
}

export default FreelancerDetail
