import { prisma } from '../../lib/prisma'
import {
  CreateUserPlaceParams,
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
}

export { PrismaUserPlaceRepository }
