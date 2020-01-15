"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
   async store (req, res) {
    // verifica se user existe, senão cria
    const { email } = req.body
    try {
      if (await _User2.default.findOne({ email })) {
        return res.status(400).json({ error: 'email já existente' })
      }
      const user = await _User2.default.create(req.body)

      return res.json({ user })
    } catch (err) {
      return res.status(400).json({ error: 'ocorreu algum problema verifique se digito tudo corretamente' })
    }
  }

   async index (req, res) {
    const { _id } = req.headers

    const user = await _User2.default.findById(_id)
    // console.log('user ' + password)

    // if (!user) {
    //   return res.status(400).send({ error: 'a não encontrando' })
    // }

    return res.json(user)
  }

   async show (req, res) {
    // pega todos os users
    const users = await _User2.default.find()

    return res.json(users)
  }

   async delete (req, res) {
    // deleta um user
    try {
      await _User2.default.findByIdAndRemove(req.params.id)
      return res.send({ sucesso: 'removido com sucesso' })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'error deleting' })
    }
  }

   async destroy (req, res) {
    // deleta um user
    try {
      const users = await _User2.default.find().remove()
      return res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(400).send(err)
    }
  }
}

exports. default = new UserController()
