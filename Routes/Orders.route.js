module.exports = (app) => {
    const App = require("../Controller/Orders.controller");
    const auth = require('../Middleware/auth');

    app.post("/order/create",auth, App.create);
    app.put('/order/:id',App.update);    
    app.delete('/order/:id',App.delete);
    app.get('/orders/user/:id',App.getuserorders);
    app.get('/orders',App.getallorders);
}