import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true, default: '12 November 1999' },
  role: { type: String, required: true, default: 'operator' },
  id: { type: String },
});

export default mongoose.model('User', userSchema);
