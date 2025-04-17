import { Place, UserPlace } from '@prisma/client'
export interface CreatePlaceParams {
  name: string
  location: string
  googlePlaceId: string
  ideaUserId: string
  categoryId: string
}
export interface CreateUserPlaceParams {
  userId: string
  placeId: string
  visited: boolean
  opinion?: string
  active: boolean
  user: string
  place: string
}

export interface GetUserPlaceParams {
  userId: string
  active?: boolean
}

export interface UpdateUserPlaceParams {
  placeId: string
  userId: string
  visited?: boolean
  opinion?: string
}

export interface GetUserPlaceByNameParams {
  userId: string
  placeId: string
  name: string
}

interface IPlaceRepository {
  createPlace(data: CreatePlaceParams): Promise<Place>
  createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace>
  getUserPlaces(
    data: GetUserPlaceParams
  ): Promise<(UserPlace & { place: Place })[]>
  getPlaces(): Promise<Place[]>
  updateUserPlace(data: UpdateUserPlaceParams): Promise<UserPlace>
}

export { IPlaceRepository }
