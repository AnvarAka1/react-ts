import React from 'react'

import { CategoryType } from 'src/types'
import { PROJECT_LIST_PATH } from 'src/constants/routes'
import { getRouteWithParams } from 'src/utils/route'
import { CATEGORY_KEY } from 'src/constants/category'
import ProjectCategory from 'src/components/Category/ProjectCategory'

type Props = {
  categories: CategoryType[]
}

function ProjectCategories ({ categories }: Props) {
  return (
    <>
      {categories.map(category => {
        const path = getRouteWithParams(PROJECT_LIST_PATH, { [CATEGORY_KEY]: category.id })

        return (
          <ProjectCategory
            key={category.id}
            category={category}
            path={path}
          />
        )
      })}
    </>
  )
}

export default ProjectCategories
