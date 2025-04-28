import { UserPlace } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import {
  CountUserPlaceByStatusParams,
  CreateUserPlaceParams,
  GetUserPlacesByStatusByIdParams,
  IUserPlaceRepository,
} from '../i-user-place-repository'

class PrismaUserPlaceRepository implements IUserPlaceRepository {
  async createUserPlace(data: CreateUserPlaceParams) {
    const createUserPlace = await prisma.userPlace.create({
      data: {
        userId: data.userId,
        placeId: data.placeId,
        visited: data.visited,
        active: data.active,
      },
    })

    return createUserPlace
  }

  async getUserPlaceByUserIdAndStatus(data: GetUserPlacesByStatusByIdParams) {
    const activeUserPlace = await prisma.userPlace.findMany({
      where: {
        userId: data.userId,
        active: data.active,
      },
    })

    return activeUserPlace
  }

  async countUserPlacesByStatus(data: CountUserPlaceByStatusParams) {
 
    const constUserPlacesByStatus = await prisma.userPlace.count({
      where: {
        userId: data.userId,
        visited: data.visited,
      },
    })
    return constUserPlacesByStatus
  }
}

export { PrismaUserPlaceRepository }
