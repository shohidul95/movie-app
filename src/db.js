const mongoose = require('mongoose');
require('dotenv').config(); // to use .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection failed: ', error.message);
        // Exit process with failure
        process.exit(1);
    }
};

connectDB();

module.exports = connectDB;