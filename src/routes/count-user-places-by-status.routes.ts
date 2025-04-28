import { FastifyInstance } from 'fastify'
import { CountUserPlaceByStatusController } from '../http/controller/user-place/count-user-places-by-status-controller'

const countUserPlaceByStatusController = new CountUserPlaceByStatusController()

export async function countUserPlaceByStatusRoutes(app: FastifyInstance) {
  app.post('/user-place-by-status', countUserPlaceByStatusController.handle)
}
