const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb+srv://denizigelinlik:Denizigelinlik52@cluster0.cvmzu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('open', () => {
        console.log('mongodb: connected.')
    });
    mongoose.connection.on('error', (err) => {
        console.log('mongodb: failed.', err)
    });
    mongoose.Promise = global.Promise;
}