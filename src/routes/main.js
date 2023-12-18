const express = require("express");
const router = express.Router();
const model = require("../models/detail");
const sliderModel = require("../models/slider");
const serviceModel = require("../models/service")
const contactModel = require("../models/contact");

router.get('/', async (req, res) => {
    const parser = await model.findOne({ "_id": "65772b2565923e924fbedcaf" });
    const sliderData = await sliderModel.find();
    const serviceData = await serviceModel.find();
    res.render('index', {
        data: parser,
        slide: sliderData,
        service: serviceData,
    });
})
router.get('/gallery', async (req, res) => {
    const parser = await model.findOne({ "_id": "65772b2565923e924fbedcaf" });
    res.render('gallery', {
        data: parser
    });
})
router.post("/contact", async (req, res) => {
    try{ 
    const userData = new contactModel(req.body);
    await userData.save();
    res.status(201).redirect('/');
    }catch(e){
        res.status(404).send(e);
    }
})



module.exports = router;


