"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');
// import { UserInterface } from './User'

// const ObjectId = model.Schema<string>.ObjectIdConstructor






const UserTodoSchema = new (0, _mongoose.Schema)({
  description: { type: String },
  owner: { type: _mongoose.Schema.Types.ObjectId, required: true }

})

exports. default = _mongoose.model('Ex_TypeTodo', UserTodoSchema)
