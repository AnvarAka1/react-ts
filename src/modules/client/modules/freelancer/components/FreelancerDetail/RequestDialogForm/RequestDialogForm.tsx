import React from 'react'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useField } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { map } from 'ramda'

import { ReactComponent as ProjectEmptyIcon } from 'src/components/Icons/project/project-empty.svg'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'
import withForm, { withFormProps } from 'src/components/Form/withForm'
import EmptyIconWrapper from 'src/components/EmptyIconWrapper'
import { ProjectType } from 'src/types'

import AvailableProjectItem from './AvailableProjectItem'

type Props = {
  readonly onClose: () => void
} & Omit<DialogProps, 'onSubmit'> & withFormProps

type ActiveProjectType = ProjectType & { active?: boolean }

const empty: never[] = []

const getNewProjects = (id: number, projects: ActiveProjectType[]) =>
  map(project => id === project.id
    ? { ...project, active: !project.active }
    : project, projects)

function RequestDialogForm ({ open, onClose, form }: Props) {
  const { handleSubmit } = form
  const projectsField = useField('projects')
  const projects: ActiveProjectType[] = projectsField.input.value || empty

  const handleProjectClick = (id: number) => {
    const newProjects = getNewProjects(id, projects)
    projectsField.input.onChange(newProjects)
  }

  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth={true}
      onClose={onClose}
    >
      <DialogTitle>
        Отправить запрос на проект
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers={true} sx={{ p: 0 }}>
          {projects.length
            ? (
              <FieldArray<ActiveProjectType>
                name="projects"
                render={({ fields }) => (
                  <>
                    {fields.map((name, index) => {
                      const value = fields.value[index]
                      const id = value.id

                      return (
                        <AvailableProjectItem
                          key={name}
                          item={value}
                          active={value.active}
                          onClick={() => handleProjectClick(id)}
                        />
                      )
                    })
                    }
                  </>
                )}
              />
            )
            : (
              <EmptyIconWrapper
                sx={{ pt: 5, pb: 5 }}
                primaryText="У вас нет активных проектов"
              >
                <ProjectEmptyIcon />
              </EmptyIconWrapper>
            )}
        </DialogContent>
        <DialogActions>
          <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <PrimaryButton type="submit" fullWidth={true}>
              Отправить запрос
            </PrimaryButton>
            <Button onClick={onClose} fullWidth={true}>
              Отмена
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default withForm(RequestDialogForm)
