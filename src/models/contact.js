const mongoose=require("mongoose");
const contact=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    }
});

const contactModel=mongoose.model('user-contact',contact);
module.exports=contactModel;