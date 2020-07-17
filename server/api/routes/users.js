import Router from 'express';
import { getUsers, createUser, getUserByEmail} from '../queries/users';
import bcrypt from 'bcryptjs';
import passport from 'passport';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await getUsers();
        res.status(200).json(response.rows);
    } catch (error){
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
});

// Create User Post
router.post('/register', (req, res) => {

    const { name, last_name, email, password1, password2, preferences, created_date, last_modified_date, last_seen, enable} = req.body;

    try {
        // Check if all fields has value
        if (!name || !last_name || !email || !enable) {
            res.json({
                message: 'Please fill in all fields'
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
            getUserByEmail(req.body.email)
            .then(user => {
                if(user.rows.length > 0){
                    res.json({
                        message: `User ${user.rows[0].email} exist`
                    })
                } else {
                    bcrypt.hash(password1, 10)
                    .then(hashedPassword => {
                        req.body.password = hashedPassword;
                        createUser(req.body)
                        .then(createdUser => {
                            res.json({
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
});

router.post('/login', passport.authenticate("local", {
    successRedirect: "/users",
    failureRedirect: "/users/login",
    failureFlash: true
}));

router.get('logout', (req, res) => {
    req.logOut();
})

// Put Routes
// router.put('/users/:id', async (req, res) => {
//     console.log(req.body);
//     try {
//         const id = req.params.id; 
//         const enable = true;
//         const {name, email, lastname} = req.body;
        
//         const response = await pool.query(updateUser, [
//             name, 
//             lastname, 
//             email, 
//             enable,
//             id
//         ]);
//         res.json('User Update Successfully');
//     } catch (error) {
//         return res.status(500).json({
//             message: "Error Ocurred",
//             error
//         });
//     }
    
// });

// Delete Routes
// router.delete('/deleteUser/:id', async (req, res) => {
    
//     try {
//         const id = req.params.id;
//         const response = await pool.query(deleteUser, [id]);
//         res.json(`User ${id} deleted success`) 
//     } catch (error) {
//         return res.status(500).json({
//             message: "Error Ocurred",
//             error
//         });
//     }
    
// });

module.exports = router;