import React from 'react'

export interface RouteType {
  component: () => JSX.Element,
  layout: ({ children }: { children: React.ReactNode }) => JSX.Element,
  path: string
}

export type Stack = {
  readonly id: number
  readonly name: string
}

export type User = {
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

export type Freelancer = {
  readonly id: number
  readonly stack: Stack
  readonly skills: Skill[]
  readonly userId: number
} & Omit<User, 'id'>

export type Client = {
  readonly id: number
  readonly companyName: string
  readonly position: Position

} & Omit<User, 'id'>

export type Skill = {
  readonly id: number
  readonly name: string
}


export type Position = {
  readonly id: number
  readonly name: string
}

