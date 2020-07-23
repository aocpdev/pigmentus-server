const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const session = require('express-session');

require('dotenv').config();

const app = express();



// Midlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Session
app.use(session({
    secret: process.env.JWT_KEY, 
    resave: false,
    saveUninitialized: false
}))

// Routes
// app.use('/', require('./api/routes/index'));
app.use('/auth', require('./api/routes/auth'));
app.use('/profile', require('./api/routes/profile'));

 // Middleware for Vue.js router mode history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function(){
    console.log('Listening... Port 3000');
});