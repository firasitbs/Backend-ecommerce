const produitModel = require("../Models/produit.model");

// Create and Save a new Message
exports.create = (req, res) => {
    const produit = new produitModel({
        libelle: req.body.libelle,
        Rate: req.body.Rate,
        Nbreview: req.body.Nbreview,
        Description: req.body.Description,
        Price: req.body.Price,
        PriceAf: req.body.PriceAf,
        Image: req.body.Image,
        Categorie:req.body.Categorie,
        Nbstock: req.body.Nbstock,
    });
    produit
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the product.",
            });
        });
};
exports.findAll = (req, res) => {
    produitModel.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving messages.",
            });
        });
};
exports.findOne = (req, res) => {
    produitModel.findById(req.params.produitId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Message not found with id " + req.params.produitId,
                });
            }
            res.send(data);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Message not found with id " + req.params.produitId,
                });
            }
            return res.status(500).send({
                message: "Error retrieving message with id " + req.params.produitId,
            });
        });
};
exports.delete = (req, res) => {
    produitModel.findByIdAndRemove(req.params.produitId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "produit not found with id " + req.params.produitId,
                });
            }
            res.send({ message: "produit deleted successfully!" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: "produit not found with id " + req.params.produitId,
                });
            }
            return res.status(500).send({
                message: "Could not delete message with id " + req.params.produitId,
            });
        });
};


