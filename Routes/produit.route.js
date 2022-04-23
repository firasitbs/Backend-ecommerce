module.exports = (app) => {
    const App = require("../Controller/produit.controller");
    const auth = require('../Middleware/auth');
    const multer = require('multer');
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, './uploads/products/');
        },
        filename: function(req, file, cb) {
          cb(null, file.originalname);
        }
    });
    const fileFilter = (req, file, cb) => {
        // reject a file
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true);
        } else {
          cb(null, false);
        }
    };
    const upload = multer({
        storage: storage,
        limits: {
          fileSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    });

    app.post("/product/create",upload.single('productImage'), App.create);
  
    app.get("/products", App.findAll);
  
    app.get("/product/:productId", App.findOne);

    app.delete("/produit/:productId", App.delete);

    //app.put("/produit/:productId", App.update);

};
  