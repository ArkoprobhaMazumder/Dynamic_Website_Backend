const mongoose=require("mongoose");

const slider=mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String
})

const sliderModel=mongoose.model("info",slider);
module.exports=sliderModel;