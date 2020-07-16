import { pool } from '../db/index';
import bcrypt from 'bcryptjs';
import { getUserByEmail, getUserById } from '../queries/users'

const localStrategy = require('passport-local').Strategy;

function initialize (passport) {
    const authenticateUser = (email, password, done) => {

        pool.query(getUserByEmail, [email])
        .then(user => {
            if (user.rows.length > 0) {
                bcrypt.compare(password, user.rows[0].password, (err, isMatch) => {
                    if (err) {
                        throw err;
                    }
                    
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Password is not correct"});
                    }
                });
            } else {
                return done(null, false, {message: "Email is not registered"});
            } 
        })
    }
    passport.use(
        new localStrategy ({
            usernameField: "email",
            passwordField: "password"
        }, 
        authenticateUser
        )
    );

    passport.serializeUser((user, done) => done(null, user.rows[0].id));

    passport.deserializeUser((id, done) => {
        pool.query(
            getUserById, 
            [id], (err, results) => {
                if (err) {
                    throw err;
                }
                return done(null, results.rows[0]);
            }
        )
    }) 
}

module.exports = initialize;