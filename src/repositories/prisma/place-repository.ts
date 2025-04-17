import { Place, UserPlace } from '@prisma/client'
import {
  CreatePlaceParams,
  CreateUserPlaceParams,
  GetUserPlaceParams,
  IPlaceRepository,
  UpdateUserPlaceParams,
} from '../i-place-repository'
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

  async createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace> {
    const userPlace = await prisma.userPlace.create({
      data: {
        user: { connect: { id: data.userId } },
        place: { connect: { id: data.placeId } },
        opinion: data.opinion,
        visited: data.visited,
        active: data.active,
      },
    })
    return userPlace
  }

  async getUserPlaces(
    data: GetUserPlaceParams
  ): Promise<(UserPlace & { place: Place })[]> {
    const userPlace = await prisma.userPlace.findMany({
      where: {
        userId: data.userId,
        active: data.active,
      },
      include: {
        place: true,
      },
    })

    return userPlace
  }

  async getPlaces() {
    const places = await prisma.place.findMany()
    return places
  }

  async updateUserPlace(data: UpdateUserPlaceParams): Promise<UserPlace> {
    const userPlace = await prisma.userPlace.update({
      data: {
        visited: data.visited,
        opinion: data.opinion,
      },
      where: {
        userId_placeId: {
          userId: data.userId,
          placeId: data.placeId,
        },
      },
    })

    return userPlace
  }
}

export { PrismaPlaceRepository }
