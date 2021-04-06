const {getCart, saveToCart} = require('../queries/carts')


exports.getCart = (req, res, next) => {
    console.log(req.query.userId)
    try {
        getCart(req.query.userId).then( cart => {
            res.status(200).json({cart: cart})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.saveToCart = (req, res, next) => {
    try {
        saveToCart(req.body)
        .then( cart => {
            res.status(200).json({
                message: "Cart added successfully",
                newId: cart.id
            })
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}