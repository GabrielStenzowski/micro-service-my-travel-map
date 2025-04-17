import { Place, UserPlace } from '@prisma/client'
import { CreatePlaceParams, IPlaceRepository } from '../i-place-repository'
import { prisma } from '../../lib/prisma'

class PrismaPlaceRepository implements IPlaceRepository {
  async createPlace(data: CreatePlaceParams): Promise<Place> {
    const place = await prisma.place.create({
      data: {
        name: data.name,
        location: data.location,
        googlePlaceId: data.googlePlaceId,
        ideaUserId: data.ideaUserId,
        categoryId: data.categoryId,
      },
    })
    return place
  }

  async getPlaces() {
    const places = await prisma.place.findMany()
    return places
  }
}

export { PrismaPlaceRepository }
