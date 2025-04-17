import fastify from 'fastify'
import { registerUserRoutes } from './routes/create-user.routes'
import { createCategoryRoutes } from './routes/create-category.routes'
import { createPlaceRoutes } from './routes/create-place.routes'
import { getCategoriesRoutes } from './routes/get-categories.routes'
import { getPlacesRoutes } from './routes/get-places.routes'
import { createUserPlaceRoutes } from './routes/create-user-place.routes'

const app = fastify()
// const app = fastify({ logger: true })

app.register(registerUserRoutes)
app.register(createCategoryRoutes)
app.register(createPlaceRoutes)
app.register(getCategoriesRoutes)
app.register(getPlacesRoutes)
app.register(createUserPlaceRoutes)
export { app }
