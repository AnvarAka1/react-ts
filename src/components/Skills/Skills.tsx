import React from 'react'
import { Chip } from '@mui/material'

import { SkillType } from 'src/types'

type Props = {
  skills: SkillType[]
}

function Skills ({ skills }: Props) {
  return (
    <>
      {skills.map(skill => (
        <Chip
          key={skill.id}
          label={skill.name}
          size={'small'}
          color="primary"
          variant="outlined"
          sx={{ mr: 1 }}
        />
      ))}
    </>
  )
}

export default Skills
