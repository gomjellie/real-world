export type LoginUser = {
  readonly email: string
  readonly password: string
}

export type LoginUserRequest = {
  readonly input: LoginUser
}

export type NewUser = {
  readonly email: string
  readonly password: string
  readonly username: string
}

export type NewUserRequest = {
  readonly user: NewUser
}

export type User = {
  readonly email: string
  readonly token: string
  readonly username: string
  readonly bio: string
  readonly image: string
}

export type UserResponse = {
  readonly user: User
}

export type UpdateUser = {
  readonly email?: string
  readonly username?: string
  readonly password?: string
  readonly image?: string
  readonly bio?: string
}

export type UpdateUserRequest = {
  readonly user: UpdateUser
}

export type ErrorResponse = {
  readonly errors: Record<string, readonly string[]>
}
