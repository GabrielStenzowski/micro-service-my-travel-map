import { app } from './app'
import { env } from './env'

app.listen({ host: '0.0.0.0', port: env.PORT }).then(() => {
  console.log(`Http Server Running, listening on port ${env.PORT}`)
})

// app.ready(() => {
//   console.log('Rotas registradas:')
//   console.log(app.printRoutes())
// })
