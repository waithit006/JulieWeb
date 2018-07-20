const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({

    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback)
}

module.exports.getUserByUsername = (username, callback) => {
    const query = { username: username }
    User.findOne(query, callback)
}

module.exports.addUser = (newUser, callback) => {
    const query_username = { username: newUser.username }
    const query_email = { email: newUser.email }

    Promise.all([User.count(query_username), User.count(query_email)]).then(([username,email])=>{
        if(username>0){
            
        }
    })
    User.count(query_username, (err, count) => {
        if (count > 0) {
            callback(null, count)
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save(callback);
                })
            })
        }
    })
}

module.exports.comparePassword = (candidatePassword,hash,callback)=>{
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    })
}