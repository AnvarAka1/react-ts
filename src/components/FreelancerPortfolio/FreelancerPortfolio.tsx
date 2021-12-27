import React from 'react'
import Box from '@mui/material/Box'
import { Link } from '@mui/material'
import { path } from 'ramda'

import { PortfolioType } from 'src/types'

type Props = {
  readonly portfolio: PortfolioType | null
}

function FreelancerPortfolio ({ portfolio }: Props) {
  const github = path(['github'], portfolio) as string
  const behance = path(['behance'], portfolio) as string
  const link = path(['link'], portfolio) as string

  return (
    <Box display="flex" flexDirection="column">
      <Link
        target="_blank"
        href={github}
        rel="noreferrer noopener"
      >
        {github}
      </Link>

      <Link
        target="_blank"
        href={behance}
        rel="noreferrer noopener"
      >
        {behance}
      </Link>

      <Link
        target="_blank"
        href={link}
        rel="noreferrer noopener"
      >
        {link}
      </Link>

    </Box>
  )
}

export default FreelancerPortfolio
