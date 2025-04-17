import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateCategoryUseCase } from '../../../use-cases/factories/create-category-use-case'
import { z } from 'zod'
import { CategoryAlreadyExistsError } from '../../../use-cases/errors/category-already-exit-error'

class CreateCategoryController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createCategoryUseCase = makeCreateCategoryUseCase()

    const createCategoryBodySchema = z.object({
      category_name: z.string(),
    })

    const data = createCategoryBodySchema.parse(request.body)

    try {
      await createCategoryUseCase.execute(data)
      reply.status(201).send({ message: 'Category created successfully' })
    } catch (err: any) {
      if (err instanceof CategoryAlreadyExistsError) {
        reply
          .status(409)
          .send({ message: err.message, errorCode: err.errorCode })
      }
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { CreateCategoryController }
