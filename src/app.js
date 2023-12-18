const express=require("express");
const router = require("./routes/main");
const hbs=require("hbs");
const body_parser=require("body-parser");
const model=require("./models/detail");
const sliderModel=require("./models/slider");
const serviceModel=require("./models/service");
require("./models/contact");
const mongoose = require('mongoose');


const app=express();
const port=process.env.PORT || 5000;


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/today11');
  console.log("server connected");



  // model.create({
  //   brandName:"Info Technical Solution",
  //   brandIconUrl:"/static/images/2.jpg",
  //   links:[
  //     {
  //       label:"Home",
  //       url:"/"
  //     },
  //     {
  //       label:"Gallery",
  //       url:"/gallery"
  //     },
  //     {
  //       label:"Contacts", 
  //       url:"/contacts",
  //     },
  //     {
  //       label:"About",
  //       url:"/about"
  //     }
  //   ]
  // })
}

// sliderModel.create([
//   {
//     title:"Nature is the best Thing",
//     subTitle:"This is the main place of living in the Lap of nature mother",
//     imageUrl:"/static/images/7.jpeg"
//   },
//   {
//     title:"Computer is the new era of this planet",
//     subTitle:"This is the one of the thing that we take on our lap",
//     imageUrl:"/static/images/4.jpg"
//   },
//   {
//     title:"Web dev is the display part of the internet",
//     subTitle:"one of the most proffesional thing",
//     imageUrl:"/static/images/3.jpg"
//   }
// ])

// serviceModel.create([
//   {
//   icon:"fa-brands fa-accusoft",
//   title:"Provide Best Courses",
//   description:"we provide cources that helps students in their learing and in placements",
//   linkText:"https://codingworld.com",
//   link:"cheack"
// },
// {
//   icon:"fa-brands fa-affiliatetheme",
//   title:"Learn Projects",
//   description:"we provide cources that helps students in their learing and in placements",
//   linkText:"https://webdevolapmentprojects.com",
//   link:"learn"
// },
// {
//   icon:"fa-solid fa-fire",
//   title:"New Technology",
//   description:"we provide cources that helps students in their learing and in placements",
//   linkText:"https://latesttechnology.com",
//   link:"Technology"
// },
// ])


//Setting the Middlewares
app.use(body_parser.urlencoded({extended:true}));
app.use('/static',express.static("public"));
app.use(router);


//Setting of the view Engine
app.set("view engine","hbs");
app.set('views','views');
hbs.registerPartials("views/partials");



app.listen(port,()=>{
    console.log("Server started");
});