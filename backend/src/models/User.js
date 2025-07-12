import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  points: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
