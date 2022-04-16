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
    Image:{
        type:String,
    },
    Categorie:{
        type:String,
    },
    Nbstock:{
        type:Number,
    },
},{timestamps: true}
)
module.exports = mongoose.model('Produit',produitSchema)
