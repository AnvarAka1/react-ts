import React from 'react'

export interface RouteType {
  component: () => JSX.Element,
  layout: ({ children }: { children: React.ReactNode }) => JSX.Element,
  path: string
}

export type UserType = {
  readonly id: number
  readonly role: string
  readonly email: string
  readonly avatar: string
  readonly firstName: string
  readonly lastName: string
  readonly fullName: string
  readonly phone: string
  readonly description: string
}

export type FreelancerType = {
  readonly id: number
  readonly stack: StackType
  readonly skills: SkillType[]
  readonly userId: number
} & Omit<UserType, 'id'>

export type ClientType = {
  readonly id: number
  readonly companyName: string
  readonly position: PositionType
} & Omit<UserType, 'id'>

export type ProjectStatusType = 'failed' | 'inProgress' | 'completed'

export type ProjectType = {
  readonly id: number
  readonly name: string
  readonly status: ProjectStatusType
  readonly freelancers: FreelancerType[] | null
}

export type StackType = {
  readonly id: number
  readonly name: string
}

export type SkillType = {
  readonly id: number
  readonly name: string
}

export type PositionType = {
  readonly id: number
  readonly name: string
}

export type CategoryType = {
  readonly id: number
  readonly name: string
  readonly imagePath: string
  readonly count: number
}
