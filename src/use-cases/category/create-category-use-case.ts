import { Category } from '@prisma/client'
import { ICategoryRepository } from '../../repositories/i-category-repository'

interface createCategoryParams {
  category_name: string
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute({ category_name }: createCategoryParams): Promise<Category> {
    console.log('Creating category:', {
      category_name,
    })

    const categoryCreated = await this.categoryRepository.createCategory({
      category_name,
    })

    return categoryCreated
  }
}

export { CreateCategoryUseCase }
