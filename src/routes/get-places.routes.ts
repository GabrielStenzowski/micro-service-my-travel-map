import { FastifyInstance } from 'fastify'
import { GetPlaceController } from '../http/controller/place/get-place-controller'

const getPlacesController = new GetPlaceController()

export async function getPlacesRoutes(app: FastifyInstance) {
  app.get('/places', getPlacesController.handle)
}
