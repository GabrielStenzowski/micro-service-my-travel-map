import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { CountExistsPlacesUseCase } from '../place/count-exists-places-use-case'

export function makeCountExistsPlacesUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const useCase = new CountExistsPlacesUseCase(placeRepository)
  return useCase
}
