// dbConnect.js
import { connect } from 'mongoose';

const DBConnect = async () => {
  try {
    // Replace with your own MongoDB connection string
    await connect('mongodb://localhost:27017/myapp');

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default DBConnect;
