const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb://<username>:<password>@<container-name>:27017
        await mongoose.connect('mongodb://root:root@mongo_db:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;