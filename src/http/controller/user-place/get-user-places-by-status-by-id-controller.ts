import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserPlacesByStatusByIdUseCase } from '../../../use-cases/factories/get-user-places-by-status-by-id-use-case'
import { boolean, z } from 'zod'

class GetUserPlacesByStatusByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const getUserPlacesByStatusByIdUseCase =
      makeGetUserPlacesByStatusByIdUseCase()

    const getUserPlacesByStatusByIdBodySchema = z.object({
      userId: z.string(),
      active: z.boolean(),
    })

    const data = getUserPlacesByStatusByIdBodySchema.parse(request.body)

    try {
      const userPlaces = await getUserPlacesByStatusByIdUseCase.execute(data)
      return reply.status(200).send(userPlaces)
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { GetUserPlacesByStatusByIdController }
