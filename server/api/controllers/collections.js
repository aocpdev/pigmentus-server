const {getCollections, saveCollection, getAllCollections, getCollection } = require('../queries/collections')


exports.getCollections = (req, res, next) => {
    try {
        getCollections().then( collections => {
            res.status(200).json({collections: collections})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.getCollection = (req, res, next) => {
    try {
        console.log(req.query.id);
        getCollection(req.query.id)
        .then( collection => {
            res.status(200).json({collection: collection})
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.getAllCollections = (req, res, next) => {
    try {
        getAllCollections().then(collections =>{
            res.status(200).json({collections: collections})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.saveCollection = (req, res, next) => {
    try {
        saveCollection(req.body)
        .then( collection => {
            res.status(200).json({
                message: "Collection added successfully",
                newId: collection.id
            })
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}