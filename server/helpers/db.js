const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://mmarodiko:euK3RIbcWxYjLvif@cluster0.nz3po.mongodb.net/fashion-store?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });