const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

mongoose
  .connect('mongodb://localhost/dogger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(`MongoDB Error: ${err}`));
//logging middleware
app.use(morgan('dev'));

//middleware for POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//useroutes middleware
app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
