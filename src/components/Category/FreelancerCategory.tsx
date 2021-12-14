import React from 'react'

import { CategoryType } from 'src/types'

import Category from './Category'

type Props = {
  readonly category: CategoryType
  readonly path: string
}

function FreelancerCategory ({ category, path }: Props) {
  const { imagePath, count, name } = category

  const primary = `${name} разработчики`
  const secondary = `${count} специалистов`

  return (
    <Category
      primary={primary}
      secondary={secondary}
      imagePath={imagePath}
      path={path}
    />
  )
}

export default FreelancerCategory
