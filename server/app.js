import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import history from 'connect-history-api-fallback';
import session from 'express-session';
import passport from 'passport'; 
import initializePassport from './api/passport/local-auth';
import flash from 'express-flash';

const app = express();

initializePassport(passport);

// Midlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

// Express Session
app.use(session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());


// Routes
// app.use('/', require('./api/routes/index'));
app.use('/users', require('./api/routes/users'))

 // Middleware for Vue.js router mode history
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function(){
    console.log('Escuchando el Puerto 3000');
});