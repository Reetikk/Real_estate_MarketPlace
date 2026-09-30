import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './src/models/User.js';

const email = 'admin@estatehub.com';
const password = 'Admin@123';

try {
  await mongoose.connect('mongodb://127.0.0.1:27017/estatehub');
  const existing = await User.findOne({ email });

  if (existing) {
    console.log('ADMIN_EXISTS');
    console.log(JSON.stringify(existing.toObject()));
  } else {
    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({
      name: 'Admin User',
      email,
      password: hash,
      phone: '9999999999',
      role: 'admin'
    });
    console.log('ADMIN_CREATED');
    console.log(JSON.stringify(user.toObject()));
  }
} catch (err) {
  console.error('ADMIN_ERROR');
  console.error(err);
} finally {
  await mongoose.disconnect();
}
