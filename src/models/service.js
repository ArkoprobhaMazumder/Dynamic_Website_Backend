const mongoose=require("mongoose");
const service=mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
});
const serviceModel=mongoose.model('service-item',service);
module.exports=serviceModel;