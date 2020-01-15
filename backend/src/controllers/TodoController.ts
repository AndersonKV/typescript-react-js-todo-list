import { Request, Response } from 'express'
import User from '../schemas/User'
import Todo from '../schemas/Todo'

class TodoController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { _id } = req.headers
    const { description } = req.body

    const user = await User.findById(_id)

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' })
    }
    console.log(user)

    // console.log(`_id: ${user._id}`)
    const todo = await Todo.create({
      owner: user._id,
      description
    })

    console.log(todo)
    return res.json(todo)
  }

  public async index (req: Request, res: Response): Promise<Response> {
    // pega o id do email e faz uma busca para retorna ele
    const { _id } = req.headers
    // const { owner } = req.headers
    // pego o email
    // const user = await User.findById(_id)
    const todo = await Todo.find({ owner: _id })

    return res.json({ todo })
  }

  public async show (req: Request, res: Response): Promise<Response> {
    // PEGA TODOS OS TODOS
    try {
      const todos = await Todo.find()
      console.log(todos)
      return res.json(todos)
    } catch (err) {
      return res.status(400).send(err)
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    // DELETA TODO
    try {
      const { _id } = req.headers

      await Todo.findByIdAndRemove(_id)
      return res.send({ sucesso: 'removido com sucesso' })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'error deleting' })
    }
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    // DELETA TODOS OS TODOS
    try {
      const todos = await Todo.find().remove()
      return res.send(todos)
    } catch (err) {
      console.log(err)
      return res.status(400).send(err)
    }
  }
}
export default new TodoController()
