const express=require ('express');
const router=express.Router();
const Post=require('../models/Post');


router.get('/',(req,res)=>{
    res.send('gokul learns post restapi');
});
 
router.post('/',(req,res)=>{
    console.log(req.body);
});



router.get('/specific',(req,res)=>{
    res.send('gokul learns specific post restapi');
});
module.exports=router;
