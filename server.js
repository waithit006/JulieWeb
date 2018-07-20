const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database, { useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log("Mongodb is connect " + config.database);
});

mongoose.connection.on('error',()=>{
    console.log("Error " + err);
});

const app = express();

const users = require('./route/user')

const port = 3080;

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)

app.get('/',(req,res)=>{
    res.send("Hello Word");
})

app.use('/user',users)

app.listen(port,()=>{
    console.log("Server is listening port : ",port);
    
})