const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected Successfully to the database");
    }).catch((e) => {
        console.log(e.message + " - Connection not successful");
        process.exit(1);
    });
};

module.exports = connectDB;
