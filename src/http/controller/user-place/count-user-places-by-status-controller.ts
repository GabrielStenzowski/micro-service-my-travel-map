import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCountUserPlacesByStatusUseCase } from '../../../use-cases/factories/count-user-places-by-status-use-case'
import { z } from 'zod'

class CountUserPlaceByStatusController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const countUserPlaceByStatusUseCase = makeCountUserPlacesByStatusUseCase()

    const countUserPlaceByStatusBodySchema = z.object({
      userId: z.string(),
      visited: z.boolean(),
    })

    const data = countUserPlaceByStatusBodySchema.parse(request.body)

    try {
      const count = await countUserPlaceByStatusUseCase.execute(data)
      return reply.status(200).send(count)
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { CountUserPlaceByStatusController }
