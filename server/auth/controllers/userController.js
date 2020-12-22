const { getUsers } = require('../queries/users');

exports.getUsers = (req, res, next) => {
    try {
        getUsers().then( users => {
            res.status(200).json({users: users})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}