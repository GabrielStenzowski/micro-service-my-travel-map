import { Place } from '@prisma/client'
export interface CreatePlaceParams {
  name: string
  location: string
  googlePlaceId: string
  ideaUserId: string
  categoryId: string
}

interface IPlaceRepository {
  createPlace(data: CreatePlaceParams): Promise<Place>
  getPlaces(): Promise<Place[]>
  countExistsPlaces(): Promise<number>
}

export { IPlaceRepository }
