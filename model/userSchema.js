const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  img:{type:String, required: true}
});

module.exports = mongoose.model('user', userSchema);


