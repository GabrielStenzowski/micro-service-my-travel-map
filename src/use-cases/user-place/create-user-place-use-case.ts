import {
  CreateUserPlaceParams,
  IUserPlaceRepository,
} from '../../repositories/i-user-place-repository'

class CreateUserPlaceUseCase {
  constructor(private userPlaceRepository: IUserPlaceRepository) {
    this.userPlaceRepository = userPlaceRepository
  }

  async execute({ userId, placeId, active, visited }: CreateUserPlaceParams) {
    console.log('Creating User Place', { userId, placeId, active, visited })

    const userPlaceCreated = await this.userPlaceRepository.createUserPlace({
      userId,
      placeId,
      active,
      visited,
    })
    return userPlaceCreated
  }
}

export { CreateUserPlaceUseCase }
