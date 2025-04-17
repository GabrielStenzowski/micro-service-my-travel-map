import { FastifyInstance } from 'fastify'
import { CreateUserPlaceController } from '../http/controller/user-place/create-user-place-controller'
const createUserPlaceController = new CreateUserPlaceController()
export async function createUserPlaceRoutes(app: FastifyInstance) {
  app.post('/user-place', createUserPlaceController.handle)
}
