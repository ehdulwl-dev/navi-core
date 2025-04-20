var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const resumesRouter = require('./routes/resumes');
const jobsRouter = require('./routes/jobs');

// 💡 크론 스케줄러 실행
require('./routes/jobScheduler');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/resumes', resumesRouter);
app.use('/api/jobs', jobsRouter);

module.exports = app;
