import { UserPlace } from '@prisma/client'

export interface CreateUserPlaceParams {
  userId: string
  placeId: string
  visited: boolean
  active: boolean
}

export interface GetUserPlacesByStatusByIdParams {
  userId: string
  active: boolean
}

export interface CountUserPlaceByStatusParams {
  userId: string
  visited: boolean
}
interface IUserPlaceRepository {
  createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace>
  getUserPlaceByUserIdAndStatus(
    data: GetUserPlacesByStatusByIdParams
  ): Promise<UserPlace[]>
  countUserPlacesByStatus(data: CountUserPlaceByStatusParams): Promise<UserPlace[]>
}

export { IUserPlaceRepository }
