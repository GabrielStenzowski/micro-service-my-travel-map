import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { verify } from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET
export function ensureAuthenticated(
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) {
  const authToken = request.headers.authorization
  if (!authToken || !authToken.startsWith('Bearer ')) {
    reply.status(401).send({ message: 'Token missing or malformed' })
    return
  }

  const token = authToken.split(' ')[1]

  try {
    verify(token, String(jwtSecret))
    done()
  } catch (error) {
    reply.status(401).send({ message: 'Invalid Token' })
  }
}
