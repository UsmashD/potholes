const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

const AppError = require('./utils/appError');
const errorHandler = require('./controllers/errorController');

const viewRouter = require('./routes/viewRoutes');
const photoRouter = require('./routes/photoRoutes');
const userRouter = require('./routes/userRoutes');
const potholeRouter = require('./routes/potholeRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));
// {
//     origin:["http://localhost:8080"],
//     credentials:true
// }));

//Developement logging
    app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());



app.use(mongoSanitize());

// 2) Routers
app.use('/', viewRouter);
app.use('/api/v1/photo', photoRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/potholes', potholeRouter);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);


module.exports = app;