import { Schema, model, Document } from 'mongoose'
// import { UserInterface } from './User'

// const ObjectId = model.Schema<string>.ObjectIdConstructor

export interface TodoInterface extends Document {
  description: string,
  owner: ['_id'];
}

const UserTodoSchema: Schema = new Schema({
  description: { type: String },
  owner: { type: Schema.Types.ObjectId, required: true }

})

export default model<TodoInterface>('Ex_TypeTodo', UserTodoSchema)
