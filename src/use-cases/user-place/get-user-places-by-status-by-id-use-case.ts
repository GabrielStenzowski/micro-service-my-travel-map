import {
  GetUserPlacesByStatusByIdParams,
  IUserPlaceRepository,
} from '../../repositories/i-user-place-repository'

class GetUserPlacesByStatusByIdUseCase {
  constructor(private userPlaceRepository: IUserPlaceRepository) {
    this.userPlaceRepository = userPlaceRepository
  }
  async execute({ userId, active }: GetUserPlacesByStatusByIdParams) {
    console.log('Getting User Places', { userId, active })

    const userPlaces =
      await this.userPlaceRepository.getUserPlaceByUserIdAndStatus({
        userId,
        active,
      })
    return userPlaces
  }
}

export { GetUserPlacesByStatusByIdUseCase }
