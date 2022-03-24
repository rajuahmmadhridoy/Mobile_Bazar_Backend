const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config({ path: `${__dirname}/../.env` });

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
require('./db/db');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;