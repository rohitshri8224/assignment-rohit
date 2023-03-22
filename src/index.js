const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./route/routes.js');
const app = express();


app.use(bodyParser.json())




mongoose.connect("mongodb+srv://bittushri8224:lyNrXnwy17jk4lFa@cluster0.ii3dqef.mongodb.net/workSpace", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is Connected."))
    .catch(error => console.log(error))

   

app.use('/', route)





app.listen(3000, function () {
    console.log('Express App Running on Port: ' + (3000))
});