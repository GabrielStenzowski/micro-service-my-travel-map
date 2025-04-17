import {
  CreatePlaceParams,
  IPlaceRepository,
} from '../../repositories/i-place-repository'

class CreatePlaceUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }
  async execute({
    name,
    location,
    ideaUserId,
    categoryId,
    googlePlaceId,
  }: CreatePlaceParams) {
    console.log('Creating place:', {
      name,
      location,
      ideaUserId,
      categoryId,
      googlePlaceId,
    })
    const placeCreated = await this.placeRepository.createPlace({
      name,
      location,
      ideaUserId,
      categoryId,
      googlePlaceId,
    })
    return placeCreated
  }
}

export { CreatePlaceUseCase }
