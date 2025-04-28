import { IPlaceRepository } from '../../repositories/i-place-repository'

class CountExistsPlacesUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }
  async execute() {
    const places = await this.placeRepository.countExistsPlaces()
    return places
  }
}

export { CountExistsPlacesUseCase }
