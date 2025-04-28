import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { registerUserRoutes } from './routes/create-user.routes'
import { createCategoryRoutes } from './routes/create-category.routes'
import { createPlaceRoutes } from './routes/create-place.routes'
import { getCategoriesRoutes } from './routes/get-categories.routes'
import { getPlacesRoutes } from './routes/get-places.routes'
import { createUserPlaceRoutes } from './routes/create-user-place.routes'
import { countExistPlaceRoutes } from './routes/count-exist-place.routes'
import { getUserPlaceByStatusByIdRoutes } from './routes/get-user-places-by-status-by-id.routes'
import { createVisitedPlaceRoutes } from './routes/create-visited-place.routes'
import { countUserPlaceByStatusRoutes } from './routes/count-user-places-by-status.routes'
import { authenticateUserRoutes } from './routes/authenticate-user.routes'
import { env } from './env'

const app = fastify()
// const app = fastify({ logger: true })
app.register(fastifyJwt, {
  secret: env.JWT_SECRET, // 👉 coloque aqui seu segredo JWT
})

app.register(registerUserRoutes)
app.register(createCategoryRoutes)
app.register(createPlaceRoutes)
app.register(getCategoriesRoutes)
app.register(getPlacesRoutes)
app.register(createUserPlaceRoutes)
app.register(countExistPlaceRoutes)
app.register(getUserPlaceByStatusByIdRoutes)
app.register(createVisitedPlaceRoutes)
app.register(countUserPlaceByStatusRoutes)
app.register(authenticateUserRoutes)
export { app }
