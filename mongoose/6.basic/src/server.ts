import mongoose from 'mongoose';
import { app } from './app';

const port = 5000;

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
    console.log(`Database connected!`);

    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Database connection error: ${error}`);
  }
}

connect();
