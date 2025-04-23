import { FastifyInstance } from 'fastify'
import { GetUserPlacesByStatusByIdController } from '../http/controller/user-place/get-user-places-by-status-by-id-controller'

const getUserPlaceByStatusByIdController =
  new GetUserPlacesByStatusByIdController()

export async function getUserPlaceByStatusByIdRoutes(app: FastifyInstance) {
  app.post(
    '/user-place-by-status-by-id',
    getUserPlaceByStatusByIdController.handle
  )
}
