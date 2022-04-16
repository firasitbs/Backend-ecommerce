module.exports = (app) => {
    const App = require("../Controller/produit.controller");
    const auth = require('../Middleware/auth');

    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/produit/:produitId", App.findOne);

    app.delete("/produit/:produitId", App.delete);

    //app.put("/produit/:produitId", App.update);

};
  