const ComandeModel = require("../Models/Comande.model");
const produitModel = require("../Models/produit.model");

exports.create = (req, res) => {
    const produits = new produitModel[(
        {
            libelle: req.body.produit[libelle],
            Rate: req.body.produit[Rate],
            Nbreview: req.body.produit[Nbreview],
            Description: req.body.produit[Description],
            Price: req.body.produit[Price],
            PriceAf: req.body.produit[PriceAf],
            Image: req.body.produit[image],
            Nbstock: req.body.produit[Nbstock],
        }
    )];
    const comande=new ComandeModel({

    })
    comande
        .save()
        .then((data) => {
            Categorie.save();
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the product.",
            });
        });
};
