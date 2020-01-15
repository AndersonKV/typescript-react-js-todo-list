import { Schema, model, Document } from 'mongoose'

export interface UserInterface extends Document {
    email: string,
    password: string,
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }

})

export default model<UserInterface>('Ex_TypeUser', UserSchema)
