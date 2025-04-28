import { FastifyInstance } from 'fastify'
import { CreateVisitedPlaceController } from '../http/controller/visited-place/create-visited-place-controller'

const createVisitedPlaceController = new CreateVisitedPlaceController()

export async function createVisitedPlaceRoutes(app: FastifyInstance) {
  app.post('/visited-place', createVisitedPlaceController.handle)
}
