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
interface IUserPlaceRepository {
  createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace>
  getUserPlaceByUserIdAndStatus(
    data: GetUserPlacesByStatusByIdParams
  ): Promise<UserPlace[]>
}

export { IUserPlaceRepository }
