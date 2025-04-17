import { PrismaCategoryRepository } from '../../repositories/prisma/category-repository'
import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { GetPlacesUseCase } from '../place/get-places-use-case'

export function makeGetPlacesUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const categoryRepository = new PrismaCategoryRepository()
  const useCase = new GetPlacesUseCase(placeRepository, categoryRepository)
  return useCase
}
