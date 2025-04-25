import {
  createVisitedPlaceParams,
  IVisitedPlaceRepository,
} from '../../repositories/i-visited-place-repository'

class CreateVisitedPlaceUseCase {
  constructor(private visitedPlaceRepository: IVisitedPlaceRepository) {
    this.visitedPlaceRepository = visitedPlaceRepository
  }

  async execute({
    userId,
    placeId,
    opinion,
    wouldReturn,
    averageRating,
    ratingAmbiente,
    ratingAtendimento,
    ratingComida,
    ratingPreco,
  }: createVisitedPlaceParams) {
    console.log('Creating Visited Place', {
      userId,
      placeId,
      opinion,
      wouldReturn,
      averageRating,
      ratingAmbiente,
      ratingAtendimento,
      ratingComida,
      ratingPreco,
    })

    const visitedPlaceCreated =
      await this.visitedPlaceRepository.createVisitedPlace({
        userId,
        placeId,
        opinion,
        wouldReturn,
        averageRating,
        ratingAmbiente,
        ratingAtendimento,
        ratingComida,
        ratingPreco,
      })

    return visitedPlaceCreated
  }
}

export { CreateVisitedPlaceUseCase }
