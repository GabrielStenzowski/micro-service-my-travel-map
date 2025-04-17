import { UserPlace } from '@prisma/client'

export interface CreateUserPlaceParams {
  userId: string
  placeId: string
  visited: boolean
  active: boolean
}

interface IUserPlaceRepository {
  createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace>
}

export { IUserPlaceRepository }
