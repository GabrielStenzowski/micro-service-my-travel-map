import { FastifyInstance } from 'fastify'
import { AuthenticateUserController } from '../http/controller/users/authenticate-user-controller'

const authenticateUserController = new AuthenticateUserController()

export async function authenticateUserRoutes(app: FastifyInstance) {
  app.post('/authenticate', authenticateUserController.handle)
}
