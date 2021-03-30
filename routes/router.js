 const express=require('express')
 const route=express.Router()
 const User = require('../mongodb/scheme')
 const mongoose=require('mongoose');
 const bodyParser = require('body-parser');
 const cors=require('cors')
 const app=express();

       function allowAccess(req,res,next){
  res.header("Access-Control-Allow-Origin" , "*");
  res.header('Access-Control-Allow-Origin' , '*');
  res.header('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-res.Headers' , '*');
  res.header('Access-Control-Max-Age' , '1728000');
  res.header('Access-Control-Allow-Headers', "*");
  res.header("Content-Length" , "0");
  res.header("Content-Type" , "text/plain"); 
    next()
 }
 app.use(allowAccess)


app.use(cors());
app.use(bodyParser())

//  app.use(function (req,res,next){
//   res.header("Access-Control-Allow-Origin","*")
//   res.header(
//       "Access-Control-Allow-Headers",
//       "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//   )
//   res.header("Access-Control-Allow-Methods",'GET,PUT,PATCH,POST,DELETE,CONFIG')
//   next();
// })
 
  
 route.get('/',(req,res)=>{
      res.sendFile(__dirname + "/index.html")
 })
 
  route.post("/search",(req,res)=>{
      //console.log(req.body)
    
          const regex= new RegExp(req.body.name,'i')
    
          
          // console.log("collapse is working" ,collapse)
             
           User.find({name:regex})
                  .then((myData)=>{
                  res.send(myData)
                  })
                })
                   
                     
        //            console.log("data is ",myData)
        //    })      
                
    
  
 
     
        //  console.log('respose is ',data)
          // const dataa=new User({name:'noorulain'})
          // console.log('working properlyyyyyyyy')
        

//        dataa.save().then((req,res)=>{
//                console.log('response has been recoded ')
          
//            })
 
   module.exports = route
