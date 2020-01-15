import { Router } from 'express'

import UserController from './controllers/UserController'
import TodoController from './controllers/TodoController'

const routes = Router()

/* =========== CRIA USUARIO ============== */
routes.post('/user', UserController.store)
/* =========== PEGA USUARIO ============== */
routes.get('/getuser', UserController.index)
/* =========== PEGA TODOS USUARIOS ============== */
routes.get('/getusers', UserController.show)
/* =========== DELETA USUARIO ============== */
routes.delete('/user/:id', UserController.delete)
/* =========== DELETA TODOS OS USUARIOS ============== */
routes.delete('/destroyusers/', UserController.destroy)

/* =========== CRIA TODO ============== */
routes.post('/todo', TodoController.store)
/* =========== PEGA TODO ============== */
routes.get('/gettodo', TodoController.index)
/* =========== PEGA TODOS OS TODOS ============== */
routes.get('/gettodos', TodoController.show)
/* =========== DELETA TODO ============== */
routes.delete('/todo', TodoController.delete)
/* =========== DELETA TODOS OS TODOS ============== */
routes.delete('/destroytodos', TodoController.destroy)

export default routes
