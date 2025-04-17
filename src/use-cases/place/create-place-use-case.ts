import { IPlaceRepository } from '../../repositories/i-place-repository'
interface CreatePlaceParams {
  name: string
  location: string
  ideaUserId: string
  categoryId: string
  googlePlaceId: string
}
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
