import { PositionType, SkillType, StackType } from 'src/types'

export type SignInValuesType = {
  readonly email: string
  readonly password: string
}

export type SignInRequestDTO = {
  readonly email: string
  readonly password: string
}

export type SignInResponseDTO = {
  readonly token: string
}

export type SignUpGeneralValuesType = {
  readonly firstName?: string
  readonly lastName?: string
  readonly email?: string
  readonly password?: string
  readonly confirmPassword?: string
  readonly role: string
  readonly agree?: string
}

export type SignUpFreelancerValuesType = {
  readonly stack?: StackType
  readonly phone?: string
  readonly about?: string
  readonly skills?: SkillType
}

export type SignUpClientValuesType = {
  readonly companyName?: string
  readonly position?: PositionType
  readonly phone?: string
  readonly about?: string
}

export type SignUpFieldValuesType = SignUpFreelancerValuesType | SignUpClientValuesType

export type Values = SignUpGeneralValuesType & SignUpFieldValuesType
