const express=require ('express');

const app =express();
const mongoose=require('mongoose');
const bodyParser =require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

const postRoute=require('./routes/posts');
app.use('/posts',postRoute);


app.get('/',(req,res)=>{
    res.send('gokul learns restapi');
});



mongoose.connect(
    process.env.DB_CONNECTION,
{useNewUrlParser:true},()=>
console.log('connected to DB!'));

app.listen(3000);
