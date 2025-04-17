import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetPlacesUseCase } from '../../../use-cases/factories/get-places-use-case'

class GetPlaceController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const placesUseCase = makeGetPlacesUseCase()
    try {
      const places = await placesUseCase.execute()
      reply.status(200).send(places)
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { GetPlaceController }
