const dotenv = require('dotenv');
dotenv.config();

module.exports = { 
    MongoURI:process.env.MongoDB_URI,
    JWT_Token:process.env.JWT_SECRET_KEY,
}
