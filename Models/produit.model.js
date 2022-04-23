 const mongoose = require('mongoose')
const produitSchema = new mongoose.Schema({
    libelle: {
        type: String,
        required: true,
        max: 200,
    },
    Rate:{
        type:Number,
    },
    Nbreview:{
        type:Number,
    },
    Description:{
        type:String,
    },
    Price:{
        type:Number,
    },
    PriceAf:{
        type:Number,
    },
    Categorie:{
        type:String,
    },
    Nbstock:{
        type:Number,
    },
    productImage:{type:String},
},{timestamps: true}
)
module.exports = mongoose.model('Produit',produitSchema)
