const mongoose = require('mongoose')
const produitSchema =require('../Models/produit.model')
const commandeSchema = new mongoose.Schema({
    refCommande:{
        type:String,
    },
    produits:[{
        type: produitSchema,
    }],
    livreur:{
        type:String,
    }, 
    somme:{
        type:Number,
    }
},{timestamps: true}
)
module.exports = mongoose.model('Commande',commandeSchema)
