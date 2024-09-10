import express, { Application, Request, Response, NextFunction } from 'express';

// Boot express
const app: Application = express();
const port = 5001;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction ) => {
    res.status(200).send({data: 'bine ati venit la cel mai site *insert muschi emoji'});
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
// // app setup
// const express = require('express')
// const app = express();

// // db
// const connectDB = require('./db/connect')
// require('dotenv').config();


// const port = 5001

// // app.listen(PORT, () => console.log(`server started at ${PORT}`));

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log('server is listening'));
//   } catch (error) {
//     console.log(error);
//   }
// }

// start()

//     // "start": "nodemon backend/server.js"
