const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://yatin73:Yeahtinnn73@recipe-site-cluster.oodlj.mongodb.net/Recipes?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin'});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));

db.once('open', function(){
    console.log("Database Connected");
});


// Models
require('./Category');
require('./Recipe');
