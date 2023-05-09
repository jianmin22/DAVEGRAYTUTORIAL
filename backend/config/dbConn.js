const mongoose = require('mongoose');
// Connect to the db
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }catch(err){
        console.error(err);
    }
}

module.exports = connectDB;