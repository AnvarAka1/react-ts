import React, { useState } from 'react'
import { slice } from 'ramda'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { SkillType } from 'src/types'

import Skills from './Skills'

type Props = {
  skills: SkillType[]
  showCount?: number
}

function LimitSkills (props: Props) {
  const {
    skills,
    showCount = 3
  } = props

  const [show, setShow] = useState(false)

  const newSkills = show ? skills : slice(0, showCount, skills)

  const isMoreThanShowCount = skills.length > showCount
  const hiddenCount = skills.length - showCount
  const renderMoreButton = !show && isMoreThanShowCount

  const handleClick = () => {
    setShow(true)
  }

  return (
    <Box>
      <Skills skills={newSkills} />
      {renderMoreButton && (
        <Button
          type="button"
          onClick={handleClick}
        >
          + еще {hiddenCount}
        </Button>
      )}
    </Box>
  )
}

export default LimitSkills
