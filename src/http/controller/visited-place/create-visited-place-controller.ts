import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateVisitedPlaceUseCase } from '../../../use-cases/factories/create-visited-place-use-case'
import { z } from 'zod'

class CreateVisitedPlaceController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createVisitedPlaceUseCase = makeCreateVisitedPlaceUseCase()

    const createVisitedPlaceBodySchema = z.object({
      userId: z.string(),
      placeId: z.string(),
      opinion: z.string(),
      wouldReturn: z.boolean(),
      averageRating: z.number(),
      ratingAmbiente: z.number(),
      ratingAtendimento: z.number(),
      ratingComida: z.number(),
      ratingPreco: z.number(),
    })

    const data = createVisitedPlaceBodySchema.parse(request.body)

    try {
      await createVisitedPlaceUseCase.execute(data)
      reply.status(201).send({ message: 'Visited Place created successfully' })
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { CreateVisitedPlaceController }
