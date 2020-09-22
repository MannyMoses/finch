const mongoose = require('mongoose');

const URI = 'mongodb+srv://Nicole:t3xas1346@finch.wlqst.mongodb.net/<dbname>?retryWrites=true&w=majority';
const connectionDB = async() => {
    await mongoose.connect(URI, 
        {useUnifiedTopology: true,
        useNewUrlParser: true});
    console.log('DB has been connected!');
}


module.exports = connectionDB;