const express = require('express');
const dotenv = require('dotenv');
// init app --------------------------------------
const app = express();
app.use(express.json());
//mongoose ------------------------------------------
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://pheonix:pheonix@users-list-app.2yosj.mongodb.net/users?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//port ----------------------------------------------
const port = 5000;

// routes -------------------------------------------
app.use('/users', require('./routes/userRoutes'));

// create server on port 5000 -----------------------
app.listen(process.env.PORT || port, () =>
  console.log('connected on port: ', process.env.PORT)
);
