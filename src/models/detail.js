const mongoose=require("mongoose");

const detailScema=mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
    {
        label:String,
        url:String
    },
    {
        label:String,
        url:String
    }
]
});

const model=mongoose.model("data",detailScema);

module.exports=model;