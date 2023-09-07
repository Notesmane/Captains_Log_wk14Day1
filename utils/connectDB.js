
const mongoose = require('mongoose');

module.exports = function connectDB() {
    // the line below here is connecting to mongoDB
    mongoose.connect(process.env.MONGO_URI)

    
    // create a variable so there is less to type
    const db = mongoose.connection
    
    // check for a connection
    db.on('error', (e) => console.log(e));
    db.on('open', () => console.log('Connected to MongoDB'));
    db.on('close', () => console.log('MongoDB disconnected!'));
}
