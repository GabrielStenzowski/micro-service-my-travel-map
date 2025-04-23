import { PrismaUserPlaceRepository } from '../../repositories/prisma/user-place-repository'
import { GetUserPlacesByStatusByIdUseCase } from '../user-place/get-user-places-by-status-by-id-use-case'

export function makeGetUserPlacesByStatusByIdUseCase() {
  const userPlaceRepository = new PrismaUserPlaceRepository()
  const useCase = new GetUserPlacesByStatusByIdUseCase(userPlaceRepository)
  return useCase
}
