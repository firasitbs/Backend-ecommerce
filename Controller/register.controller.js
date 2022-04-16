const User = require('../Models/user.model')
const bycrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

async function signin(req, res, next){
    try {
      // Get user input
      const { email, password } = req.body;
      console.log(email);
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
      if (user && (await bycrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign( 
          { user_id: user._id, email },
          "anystring",
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
        // user
        res.status(200).json({
            token,
            user
        });
      }
      //res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log('heddy');
    }
    // Our register logic ends here
}
  

module.exports = {
    signin
}