import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async store (req: Request, res: Response): Promise<Response> {
    // verifica se user existe, senão cria
    const { email } = req.body
    try {
      if (await User.findOne({ email })) {
        return res.status(400).json({ error: 'email já existente' })
      }
      const user = await User.create(req.body)

      return res.json({ user })
    } catch (err) {
      return res.status(400).json({ error: 'ocorreu algum problema verifique se digito tudo corretamente' })
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const { _id } = req.headers

    const user = await User.findById(_id)
    // console.log('user ' + password)

    // if (!user) {
    //   return res.status(400).send({ error: 'a não encontrando' })
    // }

    return res.json(user)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    // pega todos os users
    const users = await User.find()

    return res.json(users)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    // deleta um user
    try {
      await User.findByIdAndRemove(req.params.id)
      return res.send({ sucesso: 'removido com sucesso' })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'error deleting' })
    }
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    // deleta um user
    try {
      const users = await User.find().remove()
      return res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(400).send(err)
    }
  }
}

export default new UserController()
