import { PrismaVisitedPlaceRepository } from '../../repositories/prisma/visited-place-repository'
import { CreateVisitedPlaceUseCase } from '../visited-place/create-visited-place-use-case'

export function makeCreateVisitedPlaceUseCase() {
  const visitedPlaceRepository = new PrismaVisitedPlaceRepository()
  const useCase = new CreateVisitedPlaceUseCase(visitedPlaceRepository)
  return useCase
}
