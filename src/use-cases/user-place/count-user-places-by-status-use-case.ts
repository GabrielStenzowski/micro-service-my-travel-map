import {
  CountUserPlaceByStatusParams,
  IUserPlaceRepository,
} from '../../repositories/i-user-place-repository'

class CountUserPlacesByStatusUseCase {
  constructor(private userPlaceRepository: IUserPlaceRepository) {}

  async execute({ userId, visited }: CountUserPlaceByStatusParams) {
    const countPlaces = await this.userPlaceRepository.countUserPlacesByStatus({
      userId,
      visited,
    })
    return countPlaces
  }
}

export { CountUserPlacesByStatusUseCase }
