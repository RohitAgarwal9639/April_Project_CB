const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const Product=require('./product');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        require:true
    },
    role:{
        type:String,
        default:'buyer',
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
})

userSchema.plugin(passportLocalMongoose);
const User=mongoose.model('User',userSchema);

module.exports=User;