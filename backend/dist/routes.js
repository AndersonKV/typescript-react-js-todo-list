"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _TodoController = require('./controllers/TodoController'); var _TodoController2 = _interopRequireDefault(_TodoController);

const routes = _express.Router.call(void 0, )

/* =========== CRIA USUARIO ============== */
routes.post('/user', _UserController2.default.store)
/* =========== PEGA USUARIO ============== */
routes.get('/getuser', _UserController2.default.index)
/* =========== PEGA TODOS USUARIOS ============== */
routes.get('/getusers', _UserController2.default.show)
/* =========== DELETA USUARIO ============== */
routes.delete('/user/:id', _UserController2.default.delete)
/* =========== DELETA TODOS OS USUARIOS ============== */
routes.delete('/destroyusers/', _UserController2.default.destroy)

/* =========== CRIA TODO ============== */
routes.post('/todo', _TodoController2.default.store)
/* =========== PEGA TODO ============== */
routes.get('/gettodo', _TodoController2.default.index)
/* =========== PEGA TODOS OS TODOS ============== */
routes.get('/gettodos', _TodoController2.default.show)
/* =========== DELETA TODO ============== */
routes.delete('/todo', _TodoController2.default.delete)
/* =========== DELETA TODOS OS TODOS ============== */
routes.delete('/destroytodos', _TodoController2.default.destroy)

exports. default = routes
