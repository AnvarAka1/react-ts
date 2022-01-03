import React from 'react'

import { CategoryType } from 'src/types'
import FreelancerCategory from 'src/components/Category/FreelancerCategory'
import { FREELANCER_LIST_PATH } from 'src/constants/routes'
import { getRouteWithParams } from 'src/utils/route'
import { CATEGORY_KEY } from 'src/constants/category'

type Props = {
  categories: CategoryType[]
}

function FreelancerCategories ({ categories }: Props) {
  return (
    <>
      {categories.map(category => {
        const path = getRouteWithParams(FREELANCER_LIST_PATH, { [CATEGORY_KEY]: category.id })

        return (
          <FreelancerCategory
            key={category.id}
            category={category}
            path={path}
          />
        )
      })}
    </>
  )
}

export default FreelancerCategories
