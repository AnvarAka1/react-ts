import React from 'react'
import Grid from '@mui/material/Grid'

import { ProjectType } from 'src/types'
import PageContainer from 'src/components/PageContainer'
import useDialog from 'src/hooks/useDialog'

import RequestDialogForm from './RequestDialogForm'
import ProjectCard from './ProjectCard'
import GeneralInfoCard from './GeneralInfoCard'

import { RequestDialogFieldTypes } from '../../types'

type Props = {
  readonly isLoading: boolean
  readonly detail: ProjectType
  readonly onRequestSend: (values: RequestDialogFieldTypes) => Promise<void>
  readonly onRequestCancel: () => Promise<void>
}

function ProjectDetail ({ isLoading, detail, onRequestSend, onRequestCancel }: Props) {
  const { open, handleOpen, handleClose } = useDialog()

  const isRequestSent = false
  const handleRequestSend = async (values: RequestDialogFieldTypes) => {
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
          {!isLoading && <ProjectCard project={detail} />}
        </Grid>
        <Grid item={true} xs={12} lg={4}>
          <GeneralInfoCard
            project={detail}
            isRequestSent={isRequestSent}
            onRequestDialogOpen={handleOpen}
            onRequestCancel={onRequestCancel}
          />
        </Grid>
      </Grid>
      <RequestDialogForm
        open={open}
        onSubmit={handleRequestSend}
        onClose={handleClose}
      />
    </PageContainer>
  )
}

export default ProjectDetail
