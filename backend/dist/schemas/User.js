'use strict'; Object.defineProperty(exports, '__esModule', { value: true }); const _mongoose = require('mongoose')

const UserSchema = new (0, _mongoose.Schema)({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }

})

exports.default = _mongoose.model('Ex_TypeUser', UserSchema)
