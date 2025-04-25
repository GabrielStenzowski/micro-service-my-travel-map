import { VisitedPlaces } from '@prisma/client'

export interface createVisitedPlaceParams {
  userId: string
  placeId: string
  opinion: string
  wouldReturn: boolean
  averageRating: number
  ratingAmbiente: number
  ratingAtendimento: number
  ratingComida: number
  ratingPreco: number
}

interface IVisitedPlaceRepository {
  createVisitedPlace(data: createVisitedPlaceParams): Promise<VisitedPlaces>
}

export { IVisitedPlaceRepository }
