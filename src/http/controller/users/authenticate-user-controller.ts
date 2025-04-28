import { makeAuthenticateUserUseCase } from '../../../use-cases/factories/authenticate-user-use-case'
import { InvalidCredentialsError } from '../../../use-cases/errors/invalid-credentials-error'
import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

class AuthenticateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const authenticateUserUseCase = makeAuthenticateUserUseCase()

    const createAuthenticateUserBodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })

    const { email, password } = createAuthenticateUserBodySchema.parse(
      request.body
    )

    try {
      const userAuthenticated = await authenticateUserUseCase.execute({
        email,
        password,
      })

      if (userAuthenticated !== null) {
        const tokenAuth = await reply.jwtSign(
          {
            email: userAuthenticated.user.email,
            name: userAuthenticated.user.name,
          },
          {
            sign: {
              sub: userAuthenticated.user.id,
            },
          }
        )
        return reply.status(200).send({ tokenAuth, email })
      }
    } catch (err: any) {
      if (err instanceof InvalidCredentialsError) {
        return reply.status(401).send({
          message: err.message,
          errorCode: err.errorCode,
        })
      }
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { AuthenticateUserController }
