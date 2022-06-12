import express from 'express';
import mongoose from 'mongoose';
import MahasiswaRouter from './routes';

async function main() {
  await mongoose.connect('mongodb://localhost:27017', {
    dbName: 'cache_law',
    autoIndex: true,
    autoCreate: true,
  });

  const app = express();
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(MahasiswaRouter);

  app.listen(8761, () => {
    console.log('App start at port 8761');
  });
}

main();
