const { getCategories }  = require('../queries/categories')

exports.getCategories = (req, res, next) => {
    try {
        getCategories().then( categories => {
            res.status(200).json({categories: categories})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}