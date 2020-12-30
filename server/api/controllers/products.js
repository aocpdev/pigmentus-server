const {getProducts, saveProduct, getInventory} = require('../queries/products')

exports.getProducts = (req, res, next) => {
    try {
        getProducts(req.query.collectionId)
        .then( products => {
            res.status(200).json({products: products})
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.getInventory = (req, res, next) => {
    try {
        getInventory()
        .then( inventory => {
            res.status(200).json({inventory: inventory})
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.saveProduct = (req, res, next) => {

    const product = req.body;

    console.log(req.body);

    // try {
    //     saveProduct(req.body)
    //     .then( product => {
    //         res.status().json({
    //             message: "product added succesfully",
    //             newId: product.id
    //         })
    //     }).catch(err => res.status(401).json({ err }));
    // } catch (error) {
    //     res.status(500).json({
    //         messags: 'Error ocurred',
    //         error
    //     })
    // }
}