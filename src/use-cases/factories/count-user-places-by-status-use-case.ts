import { PrismaUserPlaceRepository } from '../../repositories/prisma/user-place-repository'
import { CountUserPlacesByStatusUseCase } from '../user-place/count-user-places-by-status-use-case'

export function makeCountUserPlacesByStatusUseCase() {
  const userRepository = new PrismaUserPlaceRepository()
  const useCase = new CountUserPlacesByStatusUseCase(userRepository)
  return useCase
}
