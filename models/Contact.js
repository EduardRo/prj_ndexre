const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  type: { type: String, default: 'personal' },
  date: { type: Date, default: Date.now },
});
// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('contact', ContactSchema);
