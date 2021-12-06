import React from 'react'
import { Skill } from 'src/types'
import { Chip } from '@mui/material'

type Props = {
  skills: Skill[]
}

function Skills ({ skills }: Props) {
  return (
    <>
      {skills.map(skill => (
        <Chip
          key={skill.id}
          label={skill.name}
          color="primary"
          variant="outlined"
        />
      ))}
    </>
  )
}

export default Skills
