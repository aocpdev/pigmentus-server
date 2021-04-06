const {getProducts, saveProduct, getInventory, getProduct} = require('../queries/products');

const https = require('https')

exports.getProducts = (req, res, next) => {
    try {
        getProducts(req.query.collectionId)
        .then( products => {
            const formatter = new Intl.NumberFormat('en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }
            );
            products.rows.map((productsValue, productsIndex) => {
                products.rows[productsIndex].customerPrice = formatter.format(productsValue.customerPrice);
            });
            res.status(200).json({products: products})
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.getProduct = (req, res, next) => {
    try {
        getProduct(req.query.id)
        .then( product => {
            const formatter = new Intl.NumberFormat('en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }
            );
            product.rows[0].customerPrice = formatter.format(product.rows[0].customerPrice);

            res.status(200).json({product: product})
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
            const formatter = new Intl.NumberFormat('en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }
            );
            inventory.rows.map((inventoryValue, inventoryIndex) => {
                inventory.rows[inventoryIndex].customerPrice = formatter.format(inventoryValue.customerPrice);
                inventory.rows[inventoryIndex].purchasePrice = formatter.format(inventoryValue.purchasePrice);
            });
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
            const {name, description, image, customerPrice, collectionId, enabled, inStock, purchasePrice, weight} = req.body;
            const product =  {
                name: name,
                description: description,
                image: image,
                customerPrice: customerPrice,
                collectionId: collectionId,
                dateCreated: new Date(),
                enabled: enabled,
                inStock: inStock,
                purchasePrice: purchasePrice,
                weight: weight
            };
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