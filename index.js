const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(fileUpload());

// Import and call the connectDB function
const connectDB = require("./config/database");
connectDB();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

// Start the server
app.listen(PORT, () => {
    console.log(`APP IS RUNNING AT ${PORT}`);
});
