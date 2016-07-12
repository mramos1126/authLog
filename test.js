var mongoose = require('mongoose'),
Schema = mongoose.Scehema,
bcrypt = require('bcrypt');

var UserSchema = new Schema ({
username : {type : String, required : true, index: { unique : true}},
password: {type : String, required: true}
});

export = test;