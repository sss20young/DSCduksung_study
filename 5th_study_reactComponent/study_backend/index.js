const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session= require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const db = require('./models');
const pageRouter = require('./routes/page');

db.sequelize.sync();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    // cookie 주고받기 가능(서버)
    origin: true,
    credentials: true,
}));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

app.use('/', pageRouter);

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});