const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserByEmail, createUser, deleteUser, updateUser } = require('../queries/users');
const { saveToken, hasToken, updateToken } = require('../queries/auth');

require('dotenv').config();


exports.userSignin = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);

    const email = req.body.email;
    const password = req.body.password;

    try {

        getUserByEmail(email)
            .then((response) => {

                if (response.rows.length === 0) {
                    res.status(401).json({
                        message: 'Invalid user or password'
                    })
                }

                if (response.rows.length > 0) {
                    bcrypt.compare(password, response.rows[0].password)
                        .then(pass => {
                            if (pass) {
                                let user = response.rows[0];

                                let token = jwt.sign({ data: user }, process.env.JWT_KEY, { expiresIn: '12h' });

                                hasToken(user.id)
                                    .then(userToken => {
                                        let authToken = { token: token, issued_date: new Date(), id: user.id };

                                        if (userToken.rows.length > 0) {
                                            updateToken(authToken)
                                                .then(authInfo => {
                                                    let userForClient = {
                                                        id: user.id,
                                                        name: user.name,
                                                        lastName: user.last_name,
                                                        email: user.email,
                                                        preferences: user.preferences
                                                    }
                                                    res.cookie('token', token, { maxAge: 12 * 60 * 60 * 1000, httpOnly: true, secret: 'secret', path:'/'}).send(userForClient);
                                                }).catch(err => res.status(401).json({ err }));
                                        } else {
                                            saveToken(authToken)
                                                .then(authInfo => {
                                                    let userForClient = {
                                                        id: user.id,
                                                        name: user.name,
                                                        lastName: user.last_name,
                                                        email: user.email,
                                                        preferences: user.preferences
                                                    }
                                                    res.cookie('token', token, { maxAge: 12 * 60 * 60 * 1000, httpOnly: true, secret: 'secret', path:'/'}).send(userForClient);
                                                }).catch(err => res.status(401).json({ err }));
                                        }
                                    }).catch(err => res.status(401).json({ err, message: 'por que esta aqui'}));
                            } else {
                                res.status(401).json({
                                    message: 'Invalid user or password'
                                })
                            }
                        }).catch(err => { })
                }
            })
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

exports.userSignup = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    try {

        const { name, last_name, email, password1, password2, preferences, created_date, last_modified_date, last_seen, enable } = req.body;

        // Check if all fields has value
        if (!name || !last_name || !email || !enable) {
            res.status(400).json({
                message: 'Please fill all fields'
            })
        }

        // Check if password contain at leat 6 characters
        if (password1.length < 6) {
            res.status(400).json({
                message: 'Password should be at least 6 characters'
            })
        }

        if (password1 != password2) {
            res.status(400).json({
                message: 'Password do not match'
            })
        }

        // Check if all condition has done to create a user, if not done return a error
        if (!name && !last_name && !email && !enable && password1.length < 6 && password1 != password2) {
            res.status(400).json({
                message: 'Register error'
            })
        } else {
            getUserByEmail(email)
                .then(user => {
                    if (user.rows.length > 0) {
                        res.status(400).json({
                            message: `User exist`
                        });
                    } else {
                        const now = new Date();
                        bcrypt.hash(password1, 10)
                            .then(hashedPassword => {
                                let password = hashedPassword;
                                let last_seen = now;
                                let created_date = now;
                                let last_modified_date = now;
                                if (password) {
                                    const userCreated = { name, last_name, email, password, preferences, created_date, last_modified_date, last_seen, enable };
                                    createUser(userCreated)
                                        .then(user => {
                                            res.status(200).json({
                                                message: "User added succesfully"
                                            })
                                        })
                                }
                            })
                    }
                })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
}

exports.userDelete = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);

    try {
        const id = req.params.id;
        deleteUser(id)
            .then(user => {
                res.status(200).json({
                    message: 'User delete success'
                })
            })
    } catch (error) {
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
}

exports.userUpdate = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    try {
        const id = req.params.id;
        const enable = true;
        const { name, email, lastname } = req.body;

        const userCreate = { name, last_name, email, enable }

        updateUser(userCreate)
            .then(user => {
                res.status(200).json({
                    message: 'User update successfully'
                })
            })
    } catch (error) {
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
}

exports.userIsAuth = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    const token = req.cookies.token;
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {

        if (err) {

        return res.status(401).json({
        mensaje: 'Error de token',
        err
        })
    } else {
        const user = {
            id: decoded.data.id,
            name: decoded.data.name,
            lastName: decoded.data.last_name,
            email: decoded.data.email,
            preferences: decoded.data.preferences
        }
        res.status(200).json({user: user})
    }
    });
}