import { VisitedPlaces } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import {
  createVisitedPlaceParams,
  IVisitedPlaceRepository,
} from '../i-visited-place-repository'

class PrismaVisitedPlaceRepository implements IVisitedPlaceRepository {
  async createVisitedPlace(
    data: createVisitedPlaceParams
  ): Promise<VisitedPlaces> {
    const createVisitedPlace = await prisma.visitedPlaces.create({
      data: {
        userId: data.userId,
        placeId: data.placeId,
        opinion: data.opinion,
        wouldReturn: data.wouldReturn,
        averageRating: data.averageRating,
        ratingAmbiente: data.ratingAmbiente,
        ratingAtendimento: data.ratingAtendimento,
        ratingComida: data.ratingComida,
        ratingPreco: data.ratingPreco,
      },
    })
    return createVisitedPlace
  }
}

export { PrismaVisitedPlaceRepository }
