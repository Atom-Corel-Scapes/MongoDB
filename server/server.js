import express from 'express';

import cors from 'cors';

import mongoose from 'mongoose';

import { getData, postData, getDataByName } from './routes/routes.js';

import { MyMiddleware } from './Middlewares/middleware.js';

const app = express();

// Middlewares
app.use(cors());
// app.use(MyMiddleware);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routes
app.get('/', getData);
app.get('/:name/:dept', getDataByName);
app.post('/post', postData);

mongoose.connect("mongodb://127.0.0.1:27017/students", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
  app.listen(4000, () => {
        console.log('Server running at 4000');
    });
})


