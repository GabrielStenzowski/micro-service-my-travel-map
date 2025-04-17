import { PrismaUserPlaceRepository } from '../../repositories/prisma/user-place-repository'
import { CreateUserPlaceUseCase } from '../user-place/create-user-place-use-case'

export function makeCreateUserPlaceUseCase() {
  const userPlaceRepository = new PrismaUserPlaceRepository()
  const useCase = new CreateUserPlaceUseCase(userPlaceRepository)
  return useCase
}
