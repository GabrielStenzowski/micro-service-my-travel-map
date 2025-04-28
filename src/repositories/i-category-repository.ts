import { Category, Place } from '@prisma/client'

export interface createCategoryParams {
  category_name: string
}

interface ICategoryRepository {
  createCategory(data: createCategoryParams): Promise<Category>
  getCategories(): Promise<Category[]>
  getCategoryById(id: string): Promise<Category | null>
}

export { ICategoryRepository }
