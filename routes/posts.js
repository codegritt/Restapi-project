const express=require ('express');
const router=express.Router();
const Post=require('../models/Post');


router.get('/',(req,res)=>{
    res.send('gokul learns post restapi');
});
 
router.post('/',(req,res)=>{
    const post= new Post({
        title:req.body.title,
        description:req.body.description

    });
    post.save()
  
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err});
    });
});



router.get('/specific',(req,res)=>{
    res.send('gokul learns specific post restapi');
});
module.exports=router;
