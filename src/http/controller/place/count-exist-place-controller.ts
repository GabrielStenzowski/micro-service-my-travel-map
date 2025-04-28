import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCountExistsPlacesUseCase } from '../../../use-cases/factories/count-exists-places-use-case'

class CountExistPlaceController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const placesUseCase = makeCountExistsPlacesUseCase()
    try {
      const places = await placesUseCase.execute()
      reply.status(200).send(places)
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { CountExistPlaceController }
