const Order=require("../Models/Order.model");
const Product=require("../Models/produit.model")

exports.create = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
};
exports.update = async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  };

exports.delete= async (req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}
exports.getuserorders= async (req,res)=>{
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getallorders= async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.paymentorders= async (req,res)=>{
    try{
      array=req.body.products;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let indeY = 0; indeY < Product.length; indeY++) {
          const elementO = Product[indeY];
          if(element.productId==elementO.productId){
            if(elementO.Nbstock==0){
              Product.findByIdAndRemove(req.params.productId).then((data) => {
                if (!data) {
                  return res.status(404).send({
                      message: "produit not found with id " + req.params.productId,
                  });
                }
                res.send({ message: "produit deleted successfully!" });
            })
            .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: "produit not found with id " + req.params.productId,
                });
            }
            return res.status(500).send({
                message: "Could not delete message with id " + req.params.produtcId,
            });
        });
            }
            else{
              const Product = new Product({
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                price: req.body.price,
                Nbstock: req.body.userId
              });
              Product.updateOne({_id: req.params.id}, thing).then(
                () => {
                  res.status(201).json({
                    message: 'Thing updated successfully!'
                  });
                }
              ).catch(
                (error) => {
                  res.status(400).json({
                    error: error
                  });
                }
              );
            }
          }
          
        }
        
        
      }   
    }catch(err){
      res.status(500).json(err);
    }
}