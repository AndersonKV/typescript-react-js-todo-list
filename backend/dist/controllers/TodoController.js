"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);
var _Todo = require('../schemas/Todo'); var _Todo2 = _interopRequireDefault(_Todo);

class TodoController {
   async store (req, res) {
    const { _id } = req.headers
    const { description } = req.body

    const user = await _User2.default.findById(_id)

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' })
    }
    console.log(user)

    // console.log(`_id: ${user._id}`)
    const todo = await _Todo2.default.create({
      owner: user._id,
      description
    })

    console.log(todo)
    return res.json(todo)
  }

   async index (req, res) {
    // pega o id do email e faz uma busca para retorna ele
    const { _id } = req.headers
    // const { owner } = req.headers
    // pego o email
    // const user = await User.findById(_id)
    const todo = await _Todo2.default.find({ owner: _id })

    return res.json({ todo })
  }

   async show (req, res) {
    // PEGA TODOS OS TODOS
    try {
      const todos = await _Todo2.default.find()
      console.log(todos)
      return res.json(todos)
    } catch (err) {
      return res.status(400).send(err)
    }
  }

   async delete (req, res) {
    // DELETA TODO
    try {
      const { _id } = req.headers

      await _Todo2.default.findByIdAndRemove(_id)
      return res.send({ sucesso: 'removido com sucesso' })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'error deleting' })
    }
  }

   async destroy (req, res) {
    // DELETA TODOS OS TODOS
    try {
      const todos = await _Todo2.default.find().remove()
      return res.send(todos)
    } catch (err) {
      console.log(err)
      return res.status(400).send(err)
    }
  }
}
exports. default = new TodoController()
