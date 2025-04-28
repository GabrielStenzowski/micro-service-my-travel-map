import { ICategoryRepository } from '../../repositories/i-category-repository'
import { IPlaceRepository } from '../../repositories/i-place-repository'

class GetPlacesUseCase {
  constructor(
    private placeRepository: IPlaceRepository,
    private categoryRepository: ICategoryRepository
  ) {
    this.placeRepository = placeRepository
    this.categoryRepository = categoryRepository
  }
  async execute() {
    const places = await this.placeRepository.getPlaces()
    const placesWithCategories = await Promise.all(
      places.map(async (place) => {
        const category = await this.categoryRepository.getCategoryById(
          place.categoryId
        )
        return { ...place, category }
      })
    )
    return placesWithCategories
  }
}

export { GetPlacesUseCase }
