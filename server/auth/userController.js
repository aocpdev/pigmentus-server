import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUserByEmail, createUser, deleteUser, updateUser} from '../api/queries/users';


exports.user_login = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    try {

        getUserByEmail(email)
            .then((response ) => {

                if (response.rows.length === 0) {
                    res.status(401).json({
                        message: 'Invald user or password'
                    })
                }

                if (response.rows.length > 0) {
                    bcrypt.compare(password, response.rows[0].password)
                        .then(pass => {
                            if (pass) {
                                let user = response.rows[0];

                                let token = jwt.sign({ data: user }, 'secret', { expiresIn: 60 * 60 * 24 * 30}) 
                                
                                res.status(200).cookie('token', token, { maxAge: 86400, httpOnly: true }).send();

                                // const rawCookies = req.headers.cookie.split('; ');
                                // console.log(rawCookies)
                            } else {
                                res.status(401).json({
                                    message: 'Invald user or password'
                                })
                            }
                        })
                }
                
            })
    } catch (error) {
        
    }
}

exports.user_signup = (req, res, next) => {
    
    try {

        const { name, last_name, email, password1, password2, preferences, created_date, last_modified_date, last_seen, enable} = req.body;
        
        // Check if all fields has value
        if (!name || !last_name || !email || !enable) {
            res.json({
                message: 'Please fill all fields'
            })
        }

        // Check if password contain at leat 6 characters
        if (password1.length < 6) {
            res.json({
                message: 'Password should be at least 6 characters'
            })
        }

        if (password1 != password2) {
            res.json({
                message: 'Password do not match'
            })
        }
    
        // Check if all condition has done to create a user, if not done return a error
        if (!name && !last_name && !email && !enable && password1.length < 6 && password1 != password2) {
            res.json({
                message: 'Register error'
            })
        } else {
            getUserByEmail(email)
            .then(user => {
                if(user.rows.length > 0){
                    res.status(400).json({
                        message: `User do not exist`
                    })
                } else {
                    bcrypt.hash(password1, 10)
                        .then(hashedPassword => {
                            let userCreated = {name, last_name, email, hashedPassword, preferences, created_date, last_modified_date, last_seen, enable}
                            createUser(userCreated)
                                .then(createdUser => {
                                    res.status(200).json({
                                        message: 'User Added Succesfully',
                                        body: {
                                            createdUser
                                        }
                                    });
                                })
                                .catch()
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

exports.user_delete = (req, res, next) => {

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

exports.user_update = (req, res, next) => {
    try {
        const id = req.params.id; 
        const enable = true;
        const {name, email, lastname} = req.body;
        
        const userCreate = {name, last_name, email, enable}

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