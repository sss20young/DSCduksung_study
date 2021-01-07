const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session= require('express-session');
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

app.use('/', pageRouter);

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});