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
            res.status(200).json({inventory: inventory});
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            message: 'Error ocurred',
            error
        })
    }
}

exports.saveProduct = (req, res, next) => {

        try {
            const {name, description, image, customerPrice, collectionId, enabled, inStock, purchasePrice} = req.body;
            const product =  {
                name: name,
                description: description,
                image: image,
                customerPrice: customerPrice,
                collectionId: collectionId,
                dateCreated: new Date(),
                enabled: enabled,
                inStock: inStock,
                purchasePrice: purchasePrice
            };
            console.log(product);
            saveProduct(product)
            .then( product => {
                res.status(200).json({
                    message: "product added succesfully",
                    newId: product.id
                })
            }).catch(err => res.status(401).json({ err }));
        } catch (error) {
            res.status(500).json({
                message: 'Error ocurred',
                error
            })
        }

}