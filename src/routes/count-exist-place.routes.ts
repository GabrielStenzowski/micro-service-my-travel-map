import { FastifyInstance } from 'fastify'
import { CountExistPlaceController } from '../http/controller/place/count-exist-place-controller'

const countExistPlacesController = new CountExistPlaceController()

export async function countExistPlaceRoutes(app: FastifyInstance) {
  app.get('/count-place', countExistPlacesController.handle)
}
